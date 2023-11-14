
import { loremIpsum } from "lorem-ipsum"

export const MainDescription = {
    title : "Little Lemon",
    location : "Chicago",
    description : loremIpsum()
}

export const Contacts = {
    Adres : "12 er Chicago",
    "Phone Number" : 111111111,
    Email : "email@gmail.com"
}

export const SocialMedia = [
    { platform : "Facebook", link : "Link" },
    { platform : "x", link : "Link" },
    { platform : "Instagram", link : "Link" }
]

export const Menu = [
    { name : "Chickpeas Salad", description : "Beans, Chickpeas and Mayonaise", price : "8$", time: "10min" },
    { name : "Fish Soup", description : "Cod in hunters steew", price : "30$", time: "30min" },
    { name : "Greek Salad", description : "Olives, vegetables and fresh feta cheese", price : "15$", time:"15min" },
    { name : "Grilled Chicken", description : "Whole Grilled Chicken server with dressing", price : "20$", time:"20 min" },
    { name : "Lemon Cheesecake", description : "Cheesecake with lemon filling", price : "15$", time:"5 min" },
    { name : "Lemon Dessert", description : "Soft Lemon Cake", price : "8$", time : "5min" },
    { name : "Lemonade with Ice cream", description : "Ice cream in a lemonade", price : "12$", time : "10min" },
    { name : "Mango Salad", description : "Beans, Mango, Lettuce", price : "15$", time : "10min" },
    { name : "Salmon Salad", description : "Fresh salmon and tomatoes in lemon dressing", price : "20$", time : "15min"},
    { name : "Steak", description : "beef", price : "50$", time: "15 min" },
]

export const tableLayout = [
    { tableName : "Premium table A", description : "Comftable chairs, and elegant table", seats : 4, count : 4 },
    { tableName : "Premium table B", description : "Big table",  seats : 6, count : 6 },
    { tableName : "Regulars table", description : "Regular", seats : 2, count : 2 },
    { tableName : "Outside table", description : "Sheltered from wind, next to fireplace", seats : 2, count : 4}
]

export const tableCustomization = [
    { name : "Beverages stand", description : "Stand with prepared beverages", price : "30$" },
    { name : "Chair for a child", description : "tall and comftable, with its own cup holder"},
    { name : "Flowers", description : "Fresh flowers", price : "10$"},
]