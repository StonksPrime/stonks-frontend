/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare var tinymce: any;

declare var echarts: any;

declare var $ENV: Env;

interface Env {
  BACKEND_HOST: string;
}