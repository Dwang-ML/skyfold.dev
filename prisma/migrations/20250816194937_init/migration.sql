-- CreateTable
CREATE TABLE "public"."user-infos" (
    "id" BIGSERIAL NOT NULL,
    "info" JSON NOT NULL,

    CONSTRAINT "user-infos_pkey" PRIMARY KEY ("id")
);
