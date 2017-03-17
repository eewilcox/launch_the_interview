categories = [
  "Non-Technical",
  "Technical",
  "Project-Related",
  "Company-Specific"
]

questions = [
  "Why are you here interviewing with us?",
  "Why the career switch into development?",
  "Talk about your experience of working in a team.",
  "How do you manage conflicts when working in a group?",
  "What is your dream job?",
  "What is your goal for the next 5 years?",
  "Why did you decide to study web development?",
  "What is your favorite programming language? Why?",
  "What piece of code are you most proud of?",
  "What did you learn yesterday?",
  "What UI, security, performance, SEO, maintainability or technology considerations do you make while building a web application or site?",
  "If you could master one technology this year, what would it be?",
  "What industry sites and blogs do you read regularly?",
  "If you were hiring for a junior web developer position, what qualities would you look for?"
]

categories.each do |category|
  Category.find_or_create_by!(name: category)
end

questions.each do |question|
  Question.find_or_create_by!(body: question, category_id: "1")
end
