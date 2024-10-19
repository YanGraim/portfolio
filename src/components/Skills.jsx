import {
  AppceleratorOriginal,
  AppleOriginal,
  CsharpOriginal,
  Css3Original,
  DbeaverOriginal,
  DockerOriginal,
  DotnetcoreOriginal,
  ExpressOriginal,
  FigmaOriginal,
  GithubactionsPlain,
  GithubOriginal,
  GitlabOriginal,
  GitOriginal,
  Html5Original,
  InsomniaOriginal,
  JavascriptOriginal,
  NodejsOriginal,
  PostgresqlOriginal,
  PrismaOriginal,
  ReactOriginal,
  SqlalchemyOriginal,
  SqliteOriginal,
  SwaggerOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
  VscodeOriginal,
  VuejsOriginal,
} from "devicons-react";

const Skills = () => {
  return (
    <div className="py-16 px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 space-y-8">
      <h2 className="text-4xl font-semibold text-center mb-14 text-zinc-50">
        Habilidades
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-6">
        <div className="flex flex-col items-center justify-center">
          <CsharpOriginal size="40" />
          <div className="text-center text-zinc-50">CSharp</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <DotnetcoreOriginal size="40" />
          <div className="text-center text-zinc-50">.Net</div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6">
        <div className="flex flex-col items-center justify-center">
          <Html5Original size="40" />
          <div className="text-center text-zinc-50">HTML</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Css3Original size="40" />
          <div className="text-center text-zinc-50">CSS</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <JavascriptOriginal size="40" />
          <div className="text-center text-zinc-50">JavaScript</div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6">
        <div className="flex flex-col items-center justify-center">
          <TypescriptOriginal size="40" />
          <div className="text-center text-zinc-50">TypeScript</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ReactOriginal size="40" />
          <div className="text-center text-zinc-50">React</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <TailwindcssOriginal size="40" />
          <div className="text-center text-zinc-50">Tailwind</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <VuejsOriginal size="40" />
          <div className="text-center text-zinc-50">VueJs</div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6">
        <div className="flex flex-col items-center justify-center">
          <NodejsOriginal size="40" />
          <div className="text-center text-zinc-50">NodeJs</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ExpressOriginal size="40" />
          <div className="text-center text-zinc-50">Express</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <PrismaOriginal size="40" />
          <div className="text-center text-zinc-50">Prisma</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <SqliteOriginal size="40" />
          <div className="text-center text-zinc-50">Sqlite</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <PostgresqlOriginal size="40" />
          <div className="text-center text-zinc-50">Postgre</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <DbeaverOriginal size="40" />
          <div className="text-center text-zinc-50">Dbeaver</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <SwaggerOriginal size="40" />
          <div className="text-center text-zinc-50">Swagger</div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6">
        <div className="flex flex-col items-center justify-center">
          <GitOriginal size="40" />
          <div className="text-center text-zinc-50">Git</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <VscodeOriginal size="40" />
          <div className="text-center text-zinc-50">VsCode</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FigmaOriginal size="40" />
          <div className="text-center text-zinc-50">Figma</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <InsomniaOriginal size="40" />
          <div className="text-center text-zinc-50">Insomnia</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <AppleOriginal color="white" size="40" />
          <div className="text-center text-zinc-50">MacOs</div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <DockerOriginal color="white" size="40" />
          <div className="text-center text-zinc-50">Docker</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
