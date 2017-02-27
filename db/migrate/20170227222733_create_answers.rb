class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.text :user_answer, null: false
      t.belongs_to :user, null: false, default: 1
    end
  end
end
