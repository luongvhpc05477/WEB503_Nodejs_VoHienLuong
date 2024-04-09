-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th4 09, 2024 lúc 09:15 AM
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
-- Cơ sở dữ liệu: `thithunodejs`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hop_dongs`
--

CREATE TABLE `hop_dongs` (
  `id` int NOT NULL,
  `ten_nguoi_mua` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `ten_nguoi_ban` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `gia_tien` decimal(10,2) NOT NULL,
  `ngay_ky` date NOT NULL,
  `trang_thai` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `hop_dongs`
--

INSERT INTO `hop_dongs` (`id`, `ten_nguoi_mua`, `ten_nguoi_ban`, `gia_tien`, `ngay_ky`, `trang_thai`) VALUES
(1, 'Võ Hiền Lương', 'Lê Ngọc Thạch', 200000.00, '2024-04-09', 1),
(3, 'Lương', 'Nhí', 20000.00, '2024-04-09', 3),
(4, 'Lương', 'Tâm', 50000.00, '2024-10-03', 3),
(5, 'Lương', 'Tâm', 50000.00, '2024-10-03', 3);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `hop_dongs`
--
ALTER TABLE `hop_dongs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `hop_dongs`
--
ALTER TABLE `hop_dongs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
