class CategorySeeder
  CATEGORIES = [
    "Non-Technical",
    "Technical",
    "Project-Related",
    "Company-Specific"
  ]

  def self.seed!
    CATEGORIES.each do |category|
      Category.find_or_create_by!(name: category)
    end
  end
end
