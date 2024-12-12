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
import { DisponibilidadeProfissionaisController } from "../disponibilidadeProfissionais.controller";
import { DisponibilidadeProfissionaisService } from "../disponibilidadeProfissionais.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  horarioFim: new Date(),
  horarioInicio: new Date(),
  id: "exampleId",
  profissional: "exampleProfissional",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  horarioFim: new Date(),
  horarioInicio: new Date(),
  id: "exampleId",
  profissional: "exampleProfissional",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    horarioFim: new Date(),
    horarioInicio: new Date(),
    id: "exampleId",
    profissional: "exampleProfissional",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  horarioFim: new Date(),
  horarioInicio: new Date(),
  id: "exampleId",
  profissional: "exampleProfissional",
  updatedAt: new Date(),
};

const service = {
  createDisponibilidadeProfissionais() {
    return CREATE_RESULT;
  },
  disponibilidadeProfissionaisItems: () => FIND_MANY_RESULT,
  disponibilidadeProfissionais: ({ where }: { where: { id: string } }) => {
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

describe("DisponibilidadeProfissionais", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DisponibilidadeProfissionaisService,
          useValue: service,
        },
      ],
      controllers: [DisponibilidadeProfissionaisController],
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

  test("POST /disponibilidadeProfissionais", async () => {
    await request(app.getHttpServer())
      .post("/disponibilidadeProfissionais")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        horarioFim: CREATE_RESULT.horarioFim.toISOString(),
        horarioInicio: CREATE_RESULT.horarioInicio.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /disponibilidadeProfissionais", async () => {
    await request(app.getHttpServer())
      .get("/disponibilidadeProfissionais")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          horarioFim: FIND_MANY_RESULT[0].horarioFim.toISOString(),
          horarioInicio: FIND_MANY_RESULT[0].horarioInicio.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /disponibilidadeProfissionais/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/disponibilidadeProfissionais"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /disponibilidadeProfissionais/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/disponibilidadeProfissionais"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        horarioFim: FIND_ONE_RESULT.horarioFim.toISOString(),
        horarioInicio: FIND_ONE_RESULT.horarioInicio.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /disponibilidadeProfissionais existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/disponibilidadeProfissionais")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        horarioFim: CREATE_RESULT.horarioFim.toISOString(),
        horarioInicio: CREATE_RESULT.horarioInicio.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/disponibilidadeProfissionais")
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
