# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170420123920) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.text    "body",                    null: false
    t.integer "user_id",     default: 1, null: false
    t.integer "question_id",             null: false
    t.index ["user_id"], name: "index_answers_on_user_id", using: :btree
  end

  create_table "asks", force: :cascade do |t|
    t.string  "body",       null: false
    t.integer "company_id", null: false
    t.index ["company_id"], name: "index_asks_on_company_id", using: :btree
  end

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
  end

  create_table "companies", force: :cascade do |t|
    t.string "name",        null: false
    t.string "url"
    t.text   "description"
    t.text   "note"
  end

  create_table "interviewers", force: :cascade do |t|
    t.string  "last_name"
    t.string  "first_name", null: false
    t.string  "title"
    t.text    "note"
    t.integer "company_id", null: false
    t.index ["company_id"], name: "index_interviewers_on_company_id", using: :btree
  end

  create_table "questions", force: :cascade do |t|
    t.text    "body",        null: false
    t.integer "category_id", null: false
    t.index ["category_id"], name: "index_questions_on_category_id", using: :btree
  end

  create_table "technologies", force: :cascade do |t|
    t.string  "name",       null: false
    t.integer "company_id", null: false
    t.index ["company_id"], name: "index_technologies_on_company_id", using: :btree
  end

end
