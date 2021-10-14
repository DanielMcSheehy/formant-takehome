import { Application, Router, send } from 'https://deno.land/x/oak/mod.ts';
import { oakCors } from 'https://deno.land/x/cors/mod.ts';
import { RobotFormInput } from "./types/types.ts";

const port = 8000;
const router = new Router();

router.post('/v1/setup', async (ctx: any) => {
  const result = await ctx.request.body({ type: 'json' }) ;
  const {value} = await result;
  const input = await value as RobotFormInput;

  console.log(input);
  ctx.response.status = 200;
  ctx.response.body = `success`;
});

const app = new Application();
app.use(oakCors()); 
app.use(router.routes());

console.info(`Listening on port ${port}`);
await app.listen({ port });