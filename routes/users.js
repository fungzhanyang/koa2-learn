const router = require("koa-router")();
const Person = require("../dbs/models/person");
const Redis = require("koa-redis");

const Store = new Redis().client;

router.prefix("/users");

router.get("/", function(ctx, next) {
    ctx.body = "this is a users response!";
});

router.get("/bar", function(ctx, next) {
    ctx.body = "this is a users/bar response";
});

router.get("/fix", async function(ctx, next) {
    const st = await Store.hset("fix", "name", Math.random());
    ctx.body = "set redis success";
});

router.post("/addPerson", async ctx => {
    console.log(ctx.request.body);

    let code;
    let { name, age } = ctx.request.body;
    if (!name || age == null) {
        code = -1;
    } else {
        const person = new Person({
            name,
            age
        });
        try {
            await person.save();
            code = 0;
        } catch (error) {
            code = -1;
        }
    }
    ctx.body = {
        code
    };
});

router.post("/getPerson", async ctx => {
    console.log(ctx.request.body);

    const result = await Person.find({
        name: ctx.request.body.name
    });
    ctx.body = {
        result
    };
});

router.post("/updatePerson", async ctx => {
    console.log(ctx.request.body);

    const result = await Person.where({
        name: ctx.request.body.name
    }).update({
        age: ctx.request.body.age
    });

    ctx.body = {
        result
    };
});

router.post("/removePerson", async ctx => {
    console.log(ctx.request.body);

    const result = await Person.where({
        name: ctx.request.body.name
    }).remove();

    ctx.body = {
        result
    };
});

module.exports = router;
