if Rails.env.development? || Rails.env.production?
  CategorySeeder.seed!
end

if Rails.env.development? || Rails.env.production?
  NonTechQuestionSeeder.seed!
end

if Rails.env.development? || Rails.env.production?
  TechnicalQuestionSeeder.seed!
end
