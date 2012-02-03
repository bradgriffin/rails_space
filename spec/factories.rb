# By using the symbol ':user', we get Factory Girl to simulate the User model.
Factory.define :user do |user|
  user.name                  "Brad Griffin"
  user.email                 "bgriffin20@gmail.com"
  user.password              "foobar"
  user.password_confirmation "foobar"
end
