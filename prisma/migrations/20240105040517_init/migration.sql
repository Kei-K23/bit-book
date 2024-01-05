-- CreateTable
CREATE TABLE "ContentOwner" (
    "idx" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContentOwner_pkey" PRIMARY KEY ("idx")
);

-- CreateTable
CREATE TABLE "Publisher" (
    "idx" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Publisher_pkey" PRIMARY KEY ("idx")
);

-- CreateTable
CREATE TABLE "Book" (
    "idx" SERIAL NOT NULL,
    "book_uniq_idx" TEXT NOT NULL,
    "bookname" TEXT NOT NULL,
    "co_id" INTEGER NOT NULL,
    "publisher_id" INTEGER NOT NULL,
    "cover_photo" TEXT,
    "created_timetick" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("idx")
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_book_uniq_idx_key" ON "Book"("book_uniq_idx");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_co_id_fkey" FOREIGN KEY ("co_id") REFERENCES "ContentOwner"("idx") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_publisher_id_fkey" FOREIGN KEY ("publisher_id") REFERENCES "Publisher"("idx") ON DELETE CASCADE ON UPDATE CASCADE;
