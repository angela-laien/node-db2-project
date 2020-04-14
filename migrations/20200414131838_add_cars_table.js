// the .up() describes the changes to the database schema
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        // a primary key, called id that autoincrements
        tbl.increments("id");
        // an index make searching for a value in a column a LOT faster
        tbl.string("VIN", 255).notNullable().unique().index();
        tbl.string("make").notNullable();
        tbl.string("model").notNullable();
        tbl.integer("mileage");
    })
};

// he .down() describes how to undo the changes
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};

// knex migrate:make add_cars_table
// delete the database file
// knex migrate:latest
// knex migrate:rollback to undo the changes