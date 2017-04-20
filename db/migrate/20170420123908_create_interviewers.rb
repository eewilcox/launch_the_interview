class CreateInterviewers < ActiveRecord::Migration[5.0]
  def change
    create_table :interviewers do |t|
      t.string :last_name
      t.string :first_name, null: false
      t.string :title
      t.text :note
      t.belongs_to :company, null: false
    end
  end
end
