class UpdateAnswers < ActiveRecord::Migration[5.0]
  def change
    rename_column :answers, :user_answer, :body
    add_column :answers, :question_id, :integer, null: false
  end
end
