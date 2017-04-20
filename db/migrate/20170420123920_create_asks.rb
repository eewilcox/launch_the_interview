class CreateAsks < ActiveRecord::Migration[5.0]
  def change
    create_table :asks do |t|
      t.string :body, null: false
      t.belongs_to :company, null: false
    end
  end
end
