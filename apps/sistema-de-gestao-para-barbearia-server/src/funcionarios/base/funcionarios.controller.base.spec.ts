import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { FuncionariosController } from "../funcionarios.controller";
import { FuncionariosService } from "../funcionarios.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cargo: "exampleCargo",
  createdAt: new Date(),
  email: "exampleEmail",
  id: "exampleId",
  nome: "exampleNome",
  salario: 42.42,
  telefone: "exampleTelefone",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  cargo: "exampleCargo",
  createdAt: new Date(),
  email: "exampleEmail",
  id: "exampleId",
  nome: "exampleNome",
  salario: 42.42,
  telefone: "exampleTelefone",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    cargo: "exampleCargo",
    createdAt: new Date(),
    email: "exampleEmail",
    id: "exampleId",
    nome: "exampleNome",
    salario: 42.42,
    telefone: "exampleTelefone",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  cargo: "exampleCargo",
  createdAt: new Date(),
  email: "exampleEmail",
  id: "exampleId",
  nome: "exampleNome",
  salario: 42.42,
  telefone: "exampleTelefone",
  updatedAt: new Date(),
};

const service = {
  createFuncionarios() {
    return CREATE_RESULT;
  },
  funcionariosItems: () => FIND_MANY_RESULT,
  funcionarios: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Funcionarios", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FuncionariosService,
          useValue: service,
        },
      ],
      controllers: [FuncionariosController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /funcionarios", async () => {
    await request(app.getHttpServer())
      .post("/funcionarios")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /funcionarios", async () => {
    await request(app.getHttpServer())
      .get("/funcionarios")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /funcionarios/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/funcionarios"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /funcionarios/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/funcionarios"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /funcionarios existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/funcionarios")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/funcionarios")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
