class AddUsersColumns < ActiveRecord::Migration
  def change
    add_column :users, :description, :text
    add_column :users, :url, :text, default: "/v1450772227/photo-1439337153520-7082a56a81f4_bnx1j5.jpg"
  end
end
