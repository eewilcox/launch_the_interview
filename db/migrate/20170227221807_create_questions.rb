class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.text :question, null: false
      t.belongs_to :category, null: false
    end
  end
end
