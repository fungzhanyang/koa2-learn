const router = require("koa-router")();

router.get("/", async (ctx, next) => {
    ctx.cookies.set("pvid", 'sui bian gao de cookie');
    await ctx.render("index", {
        title: "Hello Koa 2!"
    });
});

router.get("/string", async (ctx, next) => {
    ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
    ctx.body = {
        title: "koa2 json",
        cookie: ctx.cookies.get('pvid')
    };
});

router.get("/test", async ctx => {
    console.log("start", new Date().getTime());
    const a = await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("resolve a");
            resolve("aa");
        }, 2000);
    });
    const b = await 12;
    ctx.body = {
        a,
        b
    };
});

module.exports = router;
