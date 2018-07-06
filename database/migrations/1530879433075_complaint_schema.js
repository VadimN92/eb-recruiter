'use strict'

const Schema = use('Schema')

class ComplaintSchema extends Schema {
  up () {
    this.create('complaints', (table) => {
      table.increments()
      table.string('recruiter_name', 80)
      table.string('city', 80)
      table.string('company', 80)
      table.string('body', 1024)
      table.timestamps()
    })
  }

  down () {
    this.drop('complaints')
  }
}

module.exports = ComplaintSchema
