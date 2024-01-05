import { db } from "../lib/db";
// Define the data to be seeded
const contentOwnersData = [
  { idx: 1, name: "ခင်ဆွေဦး" },
  { idx: 2, name: "တိုးထက်" },
  { idx: 3, name: "မင်းကိုနိုင်" },
  { idx: 4, name: "မိုးမိုး (အင်းလျား)" },
  { idx: 5, name: "နိုင်ဇော် (Lazy Club)" },
  { idx: 6, name: "Synergy Publishing" },
  { idx: 7, name: "သန်းဝင်းလှိုင်" },
  { idx: 8, name: "ရာပြည့်" },
  { idx: 9, name: "ချစ်ဦးညို" },
  { idx: 10, name: "အကြည်တော်" },
];

const publisherData = [
  { idx: 1, name: "ခင်ဆွေဦး" },
  { idx: 2, name: "ဆင်ဖြူကျွန်း ကျော်လှိုင်ဦး" },
  { idx: 3, name: "မင်းကိုနိုင်" },
  { idx: 4, name: "မိုးမိုး (အင်းလျား)" },
  { idx: 5, name: "နိုင်ဇော် (Lazy Club)" },
  { idx: 6, name: "နိုင်းနိုင်းစနေ" },
  { idx: 7, name: "သန်းဝင်းလှိုင်" },
  { idx: 8, name: "ရာပြည့်ဦးစိုးညွန့်" },
  { idx: 9, name: "ချစ်ဦးညို" },
  { idx: 10, name: "အကြည်တော်" },
];

const bookData = [
  {
    idx: 5,
    co_id: 1,
    publisher_id: 1,
    book_uniq_idx: "BOK0005",
    bookname: "အောင်ရဲ့အောင်",
    cover_photo: "/book1.jpeg",
    price: 600,
    created_timetick: new Date("2014-03-01T00:00:00"),
  },
  {
    idx: 6,
    co_id: 1,
    publisher_id: 1,
    book_uniq_idx: "BOK0006",
    bookname: "စစ်ကိုင်းသမီး ဒိုင်ယာရီ",
    cover_photo: "/book2.jpeg",
    price: 800,
    created_timetick: new Date("2014-03-01T00:00:00"),
  },
  {
    idx: 7,
    co_id: 1,
    publisher_id: 1,
    book_uniq_idx: "BOK0007",
    bookname: "ဝါဆိုဦးကပန်ဖူးတယ်",
    cover_photo: "/book3.jpeg",
    price: 800,
    created_timetick: new Date("2014-03-01T00:00:00"),
  },
  {
    idx: 8,
    co_id: 2,
    publisher_id: 2,
    book_uniq_idx: "BOK0008",
    bookname: "အမျိုးသားအားနည်းရောဂါနှင့် အခြားကျန်းမာရေးဆောင်းပါးများ",
    cover_photo: "/book4.jpeg",
    price: 600,
    created_timetick: new Date("2014-03-01T00:00:00"),
  },
  {
    idx: 9,
    co_id: 3,
    publisher_id: 3,
    book_uniq_idx: "BOK0009",
    bookname: "နောက်ကြည့်မှန်",
    cover_photo: "/book5.jpeg",
    price: 1200,
    created_timetick: new Date("2014-03-01T00:00:00"),
  },
  {
    idx: 10,
    co_id: 4,
    publisher_id: 4,
    book_uniq_idx: "BOK0010",
    bookname: "ခံတက်နူလေးတွေညှိးချိန်တန်တော့",
    cover_photo: "/book6.jpeg",
    price: 2000,
    created_timetick: new Date("2014-03-01T00:00:00"),
  },
  {
    idx: 11,
    co_id: 4,
    publisher_id: 4,
    book_uniq_idx: "BOK0011",
    bookname: "သုံးလွန်းတင်မှကြိုး",
    cover_photo: "/book7.jpeg",
    price: 80,
    created_timetick: new Date("2014-03-01T00:00:00"),
  },
  {
    idx: 12,
    co_id: 4,
    publisher_id: 4,
    book_uniq_idx: "BOK0012",
    bookname: "ပွင့်တချို့ ကြွေတချို့",
    cover_photo: "/book8.jpeg",
    price: 500,
    created_timetick: new Date("2014-03-01T00:00:00"),
  },
  {
    idx: 13,
    co_id: 5,
    publisher_id: 5,
    book_uniq_idx: "BOK0013",
    bookname: "ကျွန်တော်နှင့် ကျွန်တော့်အင်္လကာ",
    cover_photo: "/book9.jpeg",
    price: 600,
    created_timetick: new Date("2014-03-01T00:00:00"),
  },
  {
    idx: 14,
    co_id: 5,
    publisher_id: 5,
    book_uniq_idx: "BOK0014",
    bookname: "ကျွန်တော်နှင့် ကျွန်တော့်ပတ်ဝန်းကျင်",
    cover_photo: "/book10.jpeg",
    price: 600,
    created_timetick: new Date("2014-03-01T00:00:00"),
  },
];

// Seed function
async function seed() {
  // Insert content owner data
  await db.contentOwner.createMany({
    data: contentOwnersData,
  });

  // Insert publisher data
  await db.publisher.createMany({
    data: publisherData,
  });

  // Insert book data
  await db.book.createMany({
    data: bookData,
  });
}

seed();
