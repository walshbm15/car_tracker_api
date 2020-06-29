# car_tracker_api

example: https://dev.to/nedsoft/getting-started-with-sequelize-and-postgres-emp#:~:text=Sequelize%20is%20a%20promise%2Dbased,loading%2C%20read%20replication%20and%20more.&text=Though%20Sequelize%20supports%20several%20other,on%20using%20Sequelize%20with%20Postgres.


## Create model and migration
sequelize model:generate --name User --attributes name:string,email:string

## Run migrations
sequelize db:migrate

## Create seed data file
sequelize seed:generate --name User

## Seed database
sequelize db:seed:all