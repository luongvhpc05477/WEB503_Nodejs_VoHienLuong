-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th4 09, 2024 lúc 09:11 AM
-- Phiên bản máy phục vụ: 8.0.31
-- Phiên bản PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `nodejs`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `update_at`) VALUES
(1, 'Oppo', NULL, NULL),
(67, 'ROG Phone ', NULL, NULL),
(84, 'Samsung', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `short_description` text,
  `image` varchar(255) DEFAULT NULL,
  `content` text,
  `price` int DEFAULT NULL,
  `sale_price` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `categories_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `short_description`, `image`, `content`, `price`, `sale_price`, `createdAt`, `updatedAt`, `categories_id`) VALUES
(1, 'Oppo A9', 'mô tả ngắn ', '170752bc9e99efc66574d5d30743c273', 'quá tuyệt vời ', 2000000, '3000000', NULL, NULL, 1),
(2, 'Oppo Reno 10 5G', 'Đẹp', 'thoai3.png', 'chất lượng cao', 600000, '200000', NULL, NULL, 1),
(3, 'Oppo Reno 11 5G', 'đẹp ', 'sp2-.jpg', 'đẹp và chất lượng', 7000000, '300000', NULL, NULL, 1),
(91, 'ROG Phone 3', NULL, '1247e3e31163427298d52554187f8835', 'thiết kế đẹp chơi game thả ga', 12000000, '11650000', '2024-04-03 20:49:10', '2024-04-03 20:49:10', 67),
(92, 'ROG Phone 5', NULL, 'b6c4d16ae71093832f266e204e0ecf80', 'thiết kế đẹp chơi game thả ga', 15000000, '16999000', '2024-04-03 20:49:49', '2024-04-03 20:49:49', 67),
(93, 'ROG Phone 6 Pro', NULL, '187e902169dabe120e27dae7dbcd0412', 'thiết kế đẹp chơi game thả ga', 18000000, '20000000', '2024-04-03 20:50:51', '2024-04-03 20:50:51', 67),
(103, 'Samsung Galaxy A05s', NULL, '6b42ea4def9a318278c10e71c26de4b8', 'thiết kế đẹp', 6999000, '5000000', '2024-04-06 10:44:19', '2024-04-06 10:44:19', 84),
(104, 'Samsung Galaxy A73', NULL, '4827b95fb213756e486ba52ec217301b', 'thiết kế đẹp', 7650000, '7000000', '2024-04-06 10:44:52', '2024-04-06 10:44:52', 84);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'Hiền Lương', 'vohienluong2022.hp@gmail.com', '12345'),
(2, 'tôi tên Hiền Lương', 'hienluong@gmail.com', '26022004');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories_id` (`categories_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
