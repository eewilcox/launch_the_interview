class TechnicalQuestionSeeder
  TECH = [
  "How can you improve page loading (actual and perceived)?",
  "What are some differences between a linked list and an array?",
  "What is a race condition?",
  "Why use source control?",
  "What does Big O mean?",
  "What is TDD and what are its benefits?",
  "What are the different kinds of HTTP requests that you can make?",
  "What is the difference between GET and POST?",
  "What is a class?",
  "What is an object?",
  "What is a module?",
  "When would you use a module versus a class?",
  "When would you use an array over a hash and why?",
  "In JavaScript, what is the difference between == and === ?",
  "In JavaScript, what is a closure?",
  "In JavaScript, what is the difference between classical inheritance and prototypical inheritance?",
  "In JavaScript, what is functional programming?",
  "In JavaScript, what does it mean that functions are treated as 'first class objects'?",
  "Describe what a ‘reset’ CSS file does and how it’s useful.",
  "In CSS, what does * { box-sizing: border-box; } do?",
  "What is the difference between SASS and CSS?",
  "What is the MVC pattern?",
  "Walk me through the flow of an HTTP request in a Rails app.",
  "Explain mass-assignment vulnerability.",
  "What are the downsides of ActiveRecord?",
  "What is the difference between unit and integration testing?",
  "What is the use of an index in a database?",
  "What is a foreign key?",
  "What is lazy loading?",
  "What is eager loading?",
  "What is the difference between an outer join and an inner join?"
  ]

  def self.seed!
    TECH.each do |question|
      Question.find_or_create_by!(body: question, category_id: "2")
    end
  end
end
