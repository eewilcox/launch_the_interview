class CreateTechnologies < ActiveRecord::Migration[5.0]
  def change
    create_table :technologies do |t|
      t.string :name, null: false
      t.belongs_to :company, null: false
    end
  end
end
