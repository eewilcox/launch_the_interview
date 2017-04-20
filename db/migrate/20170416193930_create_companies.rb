class CreateCompanies < ActiveRecord::Migration[5.0]
  def change
      create_table :companies do |t|
      t.string :name, null: false
      t.string :url
      t.text :description
      t.text :note
    end
  end
end
