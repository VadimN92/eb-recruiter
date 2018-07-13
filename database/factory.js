const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: 'admin',
    email: 'admin@admin.com',
    password: await Hash.make('12345678'),
    ip: faker.ip()
  }
})
