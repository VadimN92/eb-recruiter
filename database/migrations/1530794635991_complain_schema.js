'use strict'

const Schema = use('Schema')

class ComplainSchema extends Schema {
  up () {
    this.create('complains', (table) => {
      table.increments()
      table.string('recrutair_name', 80)
      table.string('city', 80)
      table.string('body', 1024)
      table.timestamps()
    })
  }

  down () {
    this.drop('complains')
  }
}

module.exports = ComplainSchema
