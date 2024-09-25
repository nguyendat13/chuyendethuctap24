-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 03, 2024 at 02:02 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nguyenphatdat_ccq2211n`
--

-- --------------------------------------------------------

--
-- Table structure for table `db_banner`
--

CREATE TABLE `db_banner` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` int UNSIGNED DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_banner`
--

INSERT INTO `db_banner` (`id`, `name`, `image`, `link`, `position`, `description`, `created_by`, `updated_by`, `created_at`, `updated_at`, `status`) VALUES
(4, 'slider_1', 'slider_1.webp', '#', 'slideshow', NULL, 1, 1, '2023-10-17 09:15:58', '2023-10-28 05:38:33', 1),
(5, 'slider_2', 'home_slider_item_image_2.webp', 'xZxz', 'slideshow', 'xzxzx', 1, 1, '2023-10-28 05:49:15', '2023-10-31 05:28:56', 1),
(8, 'sadsad', 'hitu.png', 'ádasd', 'ádsad', NULL, 1, NULL, NULL, NULL, 1),
(9, 'sadsad', 'hitu.png', 'ádasd', 'ádsad', NULL, 1, NULL, NULL, NULL, 1),
(10, 'sadsad', 'hitu.png', 'ádasd', 'ádsad', NULL, 1, NULL, NULL, NULL, 1),
(11, 'sadsad', 'hitu.png', 'ádasd', 'ádsad', 'ádasdsad', 1, NULL, NULL, NULL, 1),
(12, 'sadsad', 'hitu.png', 'ádasd', 'ádsad', 'ádasdsad', 1, NULL, NULL, NULL, 1),
(18, 'slider_3', 'home_slider_item_image_3.webp', 'ádsa', 'slideshow', NULL, 1, NULL, '2024-05-04 13:29:30', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_brand`
--

CREATE TABLE `db_brand` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_brand`
--

INSERT INTO `db_brand` (`id`, `name`, `slug`, `image`, `sort_order`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(2, 'Hàn Quốc', 'han-quoc', '', 0, 'Mô tả SEO', '2020-07-03 02:06:19', '2023-12-28 04:07:23', 1, 1, 2),
(3, 'Thái Lan', 'thai-lan', '', 0, 'Mô tả SEO', '2020-07-03 02:06:19', '2022-11-19 00:54:36', 1, 1, 2),
(4, 'Nhật Bản', 'nhat-ban', '', 0, 'Mô tả SEO', '2020-07-03 02:06:19', '2022-11-19 00:54:44', 1, 1, 2),
(30, 'dat', 'dat', 'ADB1_1.png', 0, '02', '2024-06-01 08:33:20', NULL, 1, NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `db_category`
--

CREATE TABLE `db_category` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int UNSIGNED NOT NULL DEFAULT '0',
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_category`
--

INSERT INTO `db_category` (`id`, `name`, `slug`, `image`, `parent_id`, `sort_order`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Hiện đại', 'hien-dai', 'Team3.e4cabd1.png', 0, 0, 'Đồ nam', '2022-11-22 11:17:31', '2023-10-17 09:35:23', 1, 1, 1),
(2, 'Cổ điển', 'co-dien', 'Team3.e4cabd1.png', 0, 0, 'Đồ nữ', '2022-11-22 11:18:00', '2023-10-17 09:35:35', 1, 1, 1),
(3, 'Áo thun nam', 'ao-thun-nam', 'Team3.e4cabd1.png', 1, 0, 'Áo thun nam', '2022-11-22 11:18:27', '2022-11-22 11:18:27', 1, 0, 1),
(4, 'Lợi đep', 'ao-so-mi-nam', 'Team3.e4cabd1.png', 1, 0, 'Áo sơ mi nam', '2022-11-22 11:18:53', '2022-11-22 11:18:53', 1, 0, 1),
(5, 'Quần short nam', 'quan-short-nam', 'Team3.e4cabd1.png', 1, 0, 'Quần short nam', '2022-11-22 11:19:32', '2022-11-22 11:19:32', 1, 0, 1),
(6, 'Quần dài nam', 'quan-dai-nam', 'Team3.e4cabd1.png', 1, 0, 'Quần dài nam', '2022-11-22 11:19:57', '2022-11-22 11:19:57', 1, 0, 1),
(7, 'Áo thun nữ', 'ao-thun-nu', 'Team3.e4cabd1.png', 2, 0, 'Áo thun nữ', '2022-11-22 11:21:27', '2022-11-22 11:21:27', 1, 0, 1),
(8, 'Áo sơ mi nữ', 'ao-so-mi-nu', 'Team3.e4cabd1.png', 2, 0, 'Áo sơ mi nữ', '2022-11-22 11:21:43', '2022-11-22 11:21:43', 1, 0, 1),
(9, 'Áo kiểu', 'ao-kieu', 'Team3.e4cabd1.png', 2, 0, 'Áo kiểu', '2022-11-22 11:22:00', '2022-11-22 11:22:00', 1, 0, 1),
(10, 'Quần short nữ', 'quan-short-nu', 'Team3.e4cabd1.png', 2, 0, 'Quần short nữ', '2022-11-22 11:22:14', '2022-11-22 11:22:14', 1, 0, 1),
(11, 'Cổ điển', 'co-dien', 'Team3.e4cabd1.png', 2, 0, 'Quần dài nữ', '2022-11-22 11:22:48', '2023-10-17 21:56:13', 1, 1, 1),
(12, 'Hiện đại', 'hien-dai', 'Team3.e4cabd1.png', 2, 0, NULL, '2022-11-22 11:23:07', '2023-10-17 21:56:07', 1, 1, 1),
(13, 'Ho Diên Lợi 23333', 'ho-dien-loi-23333', 'Team3.e4cabd1.png', 8, 1, 'fsdfsfdf', '2023-03-02 18:35:22', '2023-03-16 17:50:02', 1, 1, 0),
(14, 'sdfdsfds', 'sdfdsfds', 'Team3.e4cabd1.png', 0, 0, 'áds', '2023-03-02 18:57:32', '2023-03-16 17:50:00', 1, 1, 0),
(15, 'dfsdf', 'dfsdf', 'Team3.e4cabd1.png', 0, 0, 'sdfdsfd', '2023-03-02 19:01:21', '2023-03-16 17:49:59', 1, 1, 0),
(16, 'zxcxc', 'zxcxc', 'Team3.e4cabd1.png', 0, 0, 'cxzc', '2023-03-02 20:42:01', '2023-03-16 17:49:58', 1, 1, 0),
(17, 'xfsdf', 'xfsdf', 'Team3.e4cabd1.png', 0, 0, 'fdsfds', '2023-03-02 20:44:50', '2023-03-16 17:49:56', 1, 1, 0),
(18, 'Giày nam 2023', 'giay-nam-2023', 'Team3.e4cabd1.png', 0, 0, 'xzcxzc', '2023-03-02 21:06:58', '2023-03-16 17:49:52', 1, 1, 0),
(19, 'sấdsa', 'sadsa', 'Team3.e4cabd1.png', 11, 1, 'dsadsad', '2023-03-16 17:59:57', '2023-10-17 09:41:14', 1, 1, 0),
(20, 'Đồ  trẻ em', 'do-tre-em', 'Team3.e4cabd1.png', 0, 0, NULL, '2023-10-17 09:36:18', '2023-10-29 01:40:50', 1, 1, 0),
(21, 'Thời trang thể thao', 'thoi-trang-the-thao', 'Team3.e4cabd1.png', 0, 0, NULL, '2023-10-17 09:41:55', '2023-10-29 01:15:51', 1, 1, 2),
(23, 'zxcxzxzcxzcxzcx', 'cxzc', 'Team3.e4cabd1.png', 0, 0, 'xzcxzc', '2023-10-29 01:37:13', '2023-10-29 01:46:18', 1, 1, 2),
(24, 'sadsds', 'sadsds', 'Team3.e4cabd1.png', 1, 1, 'sadsds', '2024-02-27 17:00:00', NULL, 1, NULL, 1),
(25, 'sadsds', 'sadsds', 'Team3.e4cabd1.png', 1, 1, 'sadsds', '2024-02-28 12:38:18', NULL, 1, NULL, 1),
(26, 'sadsds', 'sadsds', 'Team3.e4cabd1.png', 1, 1, 'sadsds', '2024-02-28 12:49:05', NULL, 1, NULL, 1),
(27, 'sadsds', 'sadsds', 'Team3.e4cabd1.png', 1, 1, 'sadsds', '2024-02-28 12:49:49', NULL, 1, NULL, 1),
(28, 'ho dien lợi', 'ho-dien-loi', 'Team3.e4cabd1.png', 1, 1, 'ho dien lợi', '2024-02-28 12:51:05', NULL, 1, NULL, 1),
(29, 'sadasd', 'sadasd', 'Team3.e4cabd1.png', 1, 1, 'sadasd', '2024-02-28 15:10:01', NULL, 1, NULL, 1),
(30, 'ádas', 'adas', 'Team3.e4cabd1.png', 1, 1, 'ádas', '2024-02-28 16:45:27', NULL, 1, NULL, 1),
(31, 'Loi 2024', 'loi-2024', 'Team3.e4cabd1.png', 1, 1, 'Loi 2024', '2024-02-28 16:45:39', NULL, 1, NULL, 1),
(32, 'sadsa', 'sadsa', 'Team4.9a108e5.png', 1, 1, 'sadsa', '2024-02-29 02:46:10', NULL, 1, NULL, 1),
(33, 'dsadsasadsd', 'dsadsasadsd', 'Team1.ef9f2df.png', 1, 1, 'dsadsasadsd', '2024-02-29 03:19:23', NULL, 1, NULL, 1),
(76, 'adas', '', '1-09f497d2-6a5c-4663-a74c-84337a3168b1.webp', 0, 0, '', '2024-05-04 13:14:09', NULL, 1, NULL, 2),
(77, 'ss', '', '433120214_799568095529424_6003018739008189306_n.jpg', 0, 0, '', '2024-05-04 21:20:35', NULL, 1, NULL, 2),
(78, 'dat', 'dsadsasadsd', 'ADB1_1.png', 25, 0, 'ad', '2024-05-06 13:21:28', NULL, 1, NULL, 2),
(79, 'ad', 'asd', 'mcbook.png', 19, 0, 'sad', '2024-05-31 21:40:12', NULL, 1, NULL, 2),
(81, 'sda', 'dsad', 'slider_text_image.webp', 0, 0, 'ád', '2024-06-01 06:28:51', NULL, 1, NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `db_contact`
--

CREATE TABLE `db_contact` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` int UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `replay_id` int UNSIGNED DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_contact`
--

INSERT INTO `db_contact` (`id`, `user_id`, `name`, `email`, `phone`, `title`, `content`, `replay_id`, `created_at`, `updated_at`, `updated_by`, `status`) VALUES
(1, NULL, 'Hồ DIên Lợi', 'hodienloi@gmail.com', '0987654321', 'Ho hoi', 'Ho hoi', 0, '2023-10-17 00:44:40', '2023-10-30 03:44:12', 1, 1),
(2, NULL, 'Hồ DIên Lợi', 'hodienloi@gmail.com', '0987654321', 'áds', 'sadasd', 0, '2023-10-17 00:47:31', '2023-10-16 18:33:17', 1, 1),
(3, NULL, 'Hồ DIên Lợi', 'hodienloi@gmail.com', '090999', 'sad', 'sds', 0, '2023-10-17 00:52:48', '2023-10-16 17:52:48', NULL, 2),
(4, NULL, 'Hồ DIên Lợi', 'hodienloi@gmail.com', '090999', 'sad', 'sadsads', 3, '2023-10-17 01:24:59', '2023-10-16 18:27:27', 1, 1),
(5, NULL, 'Hồ DIên Lợi', 'hodienloi@gmail.com', '090999', 'sad', 'Noi dung tra lời', 4, '2023-10-17 01:27:27', '2023-10-16 18:27:27', NULL, 2),
(6, NULL, 'Hồ DIên Lợi', 'hodienloi@gmail.com', '0987654321', 'áds', 'sadsadsd', 2, '2023-10-17 01:33:17', '2023-10-16 18:33:17', NULL, 2),
(7, NULL, 'Hồ DIên Lợi', 'hodienloi@gmail.com', '0987654321', 'Ho hoi', 'ádasd', 1, '2023-10-30 10:25:55', '2023-10-30 03:25:55', NULL, 2),
(8, NULL, 'Hồ DIên Lợi', 'hodienloi@gmail.com', '0987654321', 'Ho hoi', 'sadsadsadsd', 1, '2023-10-30 10:26:22', '2023-10-30 03:26:22', NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `db_menu`
--

CREATE TABLE `db_menu` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int UNSIGNED DEFAULT '0',
  `parent_id` int UNSIGNED DEFAULT '0',
  `type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `table_id` int UNSIGNED DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_menu`
--

INSERT INTO `db_menu` (`id`, `name`, `link`, `sort_order`, `parent_id`, `type`, `position`, `table_id`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Trang chủ', 'http://localhost:3000/', 1, 0, 'custom', 'mainmenu', 0, '2022-11-22 12:36:05', '2023-11-02 18:40:19', 1, 1, 0),
(2, 'Về chúng tôi', 'gioi-thieu', 2, 0, 'page', 'mainmenu', 39, '2022-11-22 13:13:46', '2023-10-18 01:31:44', 1, 1, 0),
(10, 'Hiện đại', 'danh-muc/hien-dai', 13, 15, 'category', 'mainmenu', 6, '2022-11-22 13:14:09', '2023-11-02 18:42:40', 1, 1, 0),
(11, 'Cổ điển', 'danh-muc/co-dien', 12, 15, 'category', 'mainmenu', 5, '2022-11-22 13:14:09', '2023-11-02 18:43:09', 1, 1, 0),
(14, 'Sản phẩm', 'san-pham', 4, 0, 'category', 'mainmenu', 2, '2022-11-22 13:14:09', '2023-11-02 18:44:07', 1, 1, 0),
(15, 'Danh mục', 'danh-muc', 14, 0, 'category', 'mainmenu', 4, '2022-11-22 13:14:09', '2023-11-02 18:44:10', 1, 1, 0),
(16, 'Giới thiệu', 'gioi-thieu', 1, 0, 'page', 'footermenu', 39, '2022-11-22 13:55:36', '2023-11-02 18:44:12', 1, 1, 0),
(17, 'Chính sách vận chuyển', 'chinh-sach-van-chuyen', 1, 0, 'page', 'footermenu', 38, '2022-11-22 13:55:36', '2023-11-02 18:44:13', 1, 1, 0),
(18, 'Chính sách bảo hành', 'chinh-sach-bao-hanh', 1, 0, 'page', 'footermenu', 37, '2022-11-22 13:55:36', '2023-11-02 18:44:15', 1, 1, 0),
(19, 'Chính sách đổi hàng', 'chinh-sach-doi-hang', 1, 0, 'page', 'footermenu', 36, '2022-11-22 13:55:36', '2023-11-02 18:44:17', 1, 1, 0),
(20, 'Chính sách mua hàng', 'chinh-sach-mua-hang', 1, 0, 'page', 'footermenu', 39, NULL, NULL, 1, 1, 0),
(49, 'Thương hiệu', 'thuong-hieu', 1, 0, 'brand', 'mainmenu', 7, '2024-01-07 23:24:15', '2024-01-07 23:24:15', 1, 1, 2),
(50, 'Hàn Quốc', 'thuong-hieu/han-quoc', 1, 49, 'brand', 'mainmenu', 2, '2023-11-02 18:30:50', '2023-11-02 18:30:50', 1, 1, 2),
(51, 'Thái Lan', 'thuong-hieu/thai-lan', 1, 49, 'brand', 'mainmenu', 3, '2023-11-02 18:30:50', '2023-11-02 18:30:50', 1, 1, 2),
(52, 'Nhật Bản', 'thuong-hieu/nhat-ban', 1, 49, 'brand', 'mainmenu', 4, '2024-01-07 23:24:15', '2024-01-07 23:24:15', 1, 1, 2),
(53, 'Blog', 'chu-de', 1, 0, 'topic', 'mainmenu', 4, '2023-10-27 04:04:07', '2023-11-02 18:45:15', 1, 1, 0),
(54, 'Bài viết', 'chu-de', 2, 53, 'topic', 'mainmenu', 5, '2023-10-17 22:26:44', '2023-11-02 18:45:10', 1, 1, 0),
(55, 'Dịch vụ', 'dich-vu', 3, 53, 'post', 'mainmenu', 6, '2023-10-17 22:26:44', '2023-11-02 18:44:22', 1, 1, 0),
(56, 'Liên hệ', 'lien-he', 2, 0, 'page', 'mainmenu', 6, '2023-10-18 01:33:54', '2023-11-02 18:44:23', 1, 1, 0),
(72, 'Chính sách mua hàng', 'chinh-sach-mua-hang', 1, 0, 'page', 'footermenu', 38, '2022-11-22 13:55:36', '2023-11-02 18:44:13', 1, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `db_order`
--

CREATE TABLE `db_order` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` int UNSIGNED NOT NULL,
  `delivery_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_address` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `type` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT 'online',
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_order`
--

INSERT INTO `db_order` (`id`, `user_id`, `delivery_name`, `delivery_gender`, `delivery_email`, `delivery_phone`, `delivery_address`, `note`, `created_at`, `type`, `updated_at`, `updated_by`, `status`) VALUES
(1, 3, 'Hồ DIên Lợi', '1', 'hodienloi@gmail.com', '090999', 'BinhDUong', 'Mua tại quầy', '2023-10-15 00:29:31', 'shop', '2023-10-15 08:18:31', 1, 6),
(2, 3, 'Hồ DIên Lợi', '1', 'hodienloi@gmail.com', '090999', 'BinhDUong', 'Mua tại quầy', '2023-10-15 01:25:01', 'shop', '2023-10-15 01:25:01', NULL, 1),
(3, 3, 'Hồ DIên Lợi', '1', 'hodienloi@gmail.com', '090999', 'BinhDUong', 'Mua tại quầy', '2023-10-15 01:34:55', 'shop', '2023-10-15 01:34:55', NULL, 1),
(4, 3, 'Khách hàng', '1', 'hodienloi@gmail.com', '090999', 'BinhDUong', 'Mua tại quầy', '2023-10-15 08:50:28', 'shop', '2023-10-15 08:50:28', NULL, 1),
(5, 3, 'Khách hàng', '1', 'hodienloi@gmail.com', '090999', 'BinhDUong', 'Mua tại quầy', '2023-10-15 08:51:23', 'shop', '2023-10-15 08:51:23', NULL, 1),
(6, 3, 'Khách hàng', '1', 'hodienloi@gmail.com', '090999', 'BinhDUong', 'Mua tại quầy', '2023-10-17 03:25:34', 'shop', '2023-10-17 03:25:34', NULL, 1),
(7, 3, 'Khách hàng', '1', 'hodienloi@gmail.com', '090999', 'BinhDUong', 'Mua tại quầy', '2023-10-19 04:50:08', 'shop', '2023-10-19 04:50:08', NULL, 1),
(8, 3, 'Khách hàng', '1', 'hodienloi@gmail.com', '090999', 'BinhDUong', 'Mua tại quầy', '2024-01-06 02:35:36', 'shop', '2024-01-06 02:35:36', NULL, 1),
(9, 3, 'Khách hàng', '1', 'hodienloi@gmail.com', '090999', 'BinhDUong', 'Mua tại quầy', '2024-01-06 02:36:54', 'shop', '2024-01-06 02:36:54', NULL, 1),
(10, 3, 'Khách hàng', '1', 'hodienloi@gmail.com', '090999', 'BinhDUong', 'Mua tại quầy', '2024-01-06 02:36:58', 'shop', '2024-01-06 02:36:58', NULL, 1),
(11, 3, 'Khách hàng', '1', 'hodienloi@gmail.com', '090999', 'BinhDUong', 'Mua tại quầy', '2024-01-06 02:36:59', 'shop', '2024-01-06 02:36:59', NULL, 1),
(12, 3, 'Khách hàng', '1', 'hodienloi@gmail.com', '090999', 'BinhDUong', 'Mua tại quầy', '2024-01-06 02:37:00', 'shop', '2024-01-06 02:37:00', NULL, 1),
(13, 3, 'Khách hàng', '1', 'hodienloi@gmail.com', '090999', 'BinhDUong', 'Mua tại quầy', '2024-01-06 02:37:00', 'shop', '2024-01-06 02:37:00', NULL, 1),
(14, 3, 'Khách hàng', '1', 'hodienloi@gmail.com', '090999', 'BinhDUong', 'Mua tại quầy', '2024-01-06 02:37:01', 'shop', '2024-01-06 02:37:01', NULL, 1),
(15, 5, 'Hồ DIên Lợi', '1', 'hodienloi2@gmail.com', '0987654321', 'Hồ Chí Minh', 'Mua tại quầy', '2024-01-06 02:37:10', 'shop', '2024-01-06 02:37:10', NULL, 1),
(16, 5, 'Hồ DIên Lợi', '1', 'hodienloi2@gmail.com', '0987654321', 'Hồ Chí Minh', 'Mua tại quầy', '2024-01-06 02:37:19', 'shop', '2024-01-06 02:37:19', NULL, 1),
(17, 3, 'Khách hàng', '1', 'hodienloi@gmail.com', '090999', 'BinhDUong', 'Mua tại quầy', '2024-01-06 03:27:50', 'shop', '2024-01-06 03:27:50', NULL, 1),
(18, 3, 'Khách hàng', '1', 'hodienloi@gmail.com', '090999', 'BinhDUong', 'Mua tại quầy', '2024-01-06 03:30:28', 'shop', '2024-01-06 03:30:28', NULL, 1),
(19, 5, 'Hồ DIên Lợi', '1', 'hodienloi2@gmail.com', '0987654321', 'Hồ Chí Minh', 'Mua tại quầy', '2024-01-07 23:09:03', 'shop', '2024-01-07 23:09:03', NULL, 1),
(20, 4, 'Hồ DIên Lợi', '1', 'hodienloi1@gmail.com', '0987654321', 'Hồ Chí Minh', 'Mua tại quầy', '2024-01-07 23:36:16', 'shop', '2024-01-07 23:36:16', NULL, 1),
(21, 4, 'Hồ DIên Lợi', '1', 'hodienloi1@gmail.com', '0987654321', 'Hồ Chí Minh', 'Mua tại quầy', '2024-01-07 23:37:58', 'shop', '2024-01-07 23:37:58', NULL, 1),
(22, 4, 'Hồ DIên Lợi', '1', 'hodienloi1@gmail.com', '0987654321', 'Hồ Chí Minh', 'Mua tại quầy', '2024-01-07 23:38:43', 'shop', '2024-01-07 23:38:43', NULL, 1),
(23, 3, 'Khách hàng', '1', 'hodienloi@gmail.com', '090999', 'BinhDUong', 'Mua tại quầy', '2024-01-07 23:40:33', 'shop', '2024-01-07 23:40:33', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_orderdetail`
--

CREATE TABLE `db_orderdetail` (
  `id` bigint UNSIGNED NOT NULL,
  `order_id` int UNSIGNED NOT NULL,
  `product_id` int UNSIGNED NOT NULL,
  `price` double NOT NULL,
  `qty` int UNSIGNED NOT NULL,
  `discount` double NOT NULL,
  `amount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_orderdetail`
--

INSERT INTO `db_orderdetail` (`id`, `order_id`, `product_id`, `price`, `qty`, `discount`, `amount`) VALUES
(1, 1, 1, 10000, 5, 0, 50000),
(2, 1, 2, 10000, 3, 0, 30000),
(3, 1, 3, 10000, 1, 0, 10000),
(4, 2, 1, 10000, 5, 0, 50000),
(5, 2, 2, 10000, 3, 0, 30000),
(6, 2, 3, 10000, 1, 0, 10000),
(7, 3, 1, 10000, 3, 0, 30000),
(8, 3, 2, 10000, 3, 0, 30000),
(9, 4, 1, 10000, 4, 0, 40000),
(10, 4, 2, 10000, 3, 0, 30000),
(11, 4, 3, 10000, 2, 0, 20000),
(12, 4, 4, 10000, 5, 0, 50000),
(13, 5, 1, 10000, 2, 0, 20000),
(14, 5, 2, 10000, 2, 0, 20000),
(15, 6, 1, 378000, 9, 0, 3402000),
(16, 6, 2, 378000, 4, 0, 1512000),
(17, 6, 3, 378000, 5, 0, 1890000),
(18, 7, 1, 378000, 8, 0, 3024000),
(19, 7, 2, 378000, 9, 0, 3402000),
(20, 9, 1005, 2132132, 3, 0, 6396396),
(21, 9, 1002, 234343, 5, 0, 1171715),
(22, 9, 1000, 10000, 4, 0, 40000),
(23, 10, 1005, 2132132, 3, 0, 6396396),
(24, 10, 1002, 234343, 5, 0, 1171715),
(25, 10, 1000, 10000, 4, 0, 40000),
(26, 11, 1005, 2132132, 3, 0, 6396396),
(27, 11, 1002, 234343, 5, 0, 1171715),
(28, 11, 1000, 10000, 4, 0, 40000),
(29, 12, 1005, 2132132, 3, 0, 6396396),
(30, 12, 1002, 234343, 5, 0, 1171715),
(31, 12, 1000, 10000, 4, 0, 40000),
(32, 13, 1005, 2132132, 3, 0, 6396396),
(33, 13, 1002, 234343, 5, 0, 1171715),
(34, 13, 1000, 10000, 4, 0, 40000),
(35, 14, 1005, 2132132, 3, 0, 6396396),
(36, 14, 1002, 234343, 5, 0, 1171715),
(37, 14, 1000, 10000, 4, 0, 40000),
(38, 15, 1005, 2132132, 3, 0, 6396396),
(39, 15, 1002, 234343, 5, 0, 1171715),
(40, 15, 1000, 10000, 4, 0, 40000),
(41, 16, 1005, 2132132, 3, 0, 6396396),
(42, 16, 1002, 234343, 5, 0, 1171715),
(43, 16, 1000, 10000, 4, 0, 40000),
(44, 17, 1005, 2132132, 3, 0, 6396396),
(45, 17, 1002, 234343, 3, 0, 703029),
(46, 17, 1000, 10000, 4, 0, 40000),
(47, 17, 34, 10000, 5, 0, 50000),
(48, 17, 29, 10000, 6, 0, 60000),
(49, 17, 24, 10000, 7, 0, 70000),
(50, 18, 1005, 2132132, 3, 0, 6396396),
(51, 18, 1002, 234343, 3, 0, 703029),
(52, 18, 1000, 10000, 4, 0, 40000),
(53, 18, 34, 10000, 5, 0, 50000),
(54, 18, 29, 10000, 6, 0, 60000),
(55, 18, 24, 10000, 7, 0, 70000),
(56, 19, 1005, 2132132, 5, 0, 10660660),
(57, 19, 1002, 234343, 77, 0, 18044411),
(58, 19, 36, 10000, 88, 0, 880000),
(59, 20, 1000, 10000, 1, 0, 10000),
(60, 20, 1002, 234343, 2, 0, 468686),
(61, 20, 1005, 2132132, 3, 0, 6396396),
(62, 21, 1000, 10000, 1, 0, 10000),
(63, 21, 1002, 234343, 2, 0, 468686),
(64, 21, 1005, 2132132, 3, 0, 6396396),
(65, 22, 1000, 10000, 1, 0, 10000),
(66, 22, 1002, 234343, 2, 0, 468686),
(67, 22, 1005, 2132132, 3, 0, 6396396),
(68, 23, 1005, 2132132, 3, 0, 6396396),
(69, 23, 1002, 234343, 4, 0, 937372),
(70, 23, 1000, 10000, 5, 0, 50000);

-- --------------------------------------------------------

--
-- Table structure for table `db_post`
--

CREATE TABLE `db_post` (
  `id` bigint UNSIGNED NOT NULL,
  `topic_id` int UNSIGNED DEFAULT NULL,
  `title` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `detail` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` enum('post','page') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'post',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_post`
--

INSERT INTO `db_post` (`id`, `topic_id`, `title`, `slug`, `detail`, `description`, `image`, `type`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(4, NULL, 'Dịch vụ', 'dich-vu', 'sadsdsadsadsd', NULL, 'sad.png', 'page', '2023-10-11 02:27:28', '2023-11-02 19:29:08', 1, 1, 2),
(6, NULL, 'Giới thiệu', 'gioi-thieu', '', NULL, 'sadsad.png', 'page', '2023-10-16 04:13:20', '2023-11-02 19:03:53', 1, 1, 2),
(8, 3, 'Hướng dẫn tự decor phòng ngủ đẹp và chuẩn phong thủy 2023', 'xzcx', 'Bạn đang tìm kiếm ý tưởng decor phòng ngủ? Bạn muốn tham khảo nhiều phong cách trang trí phòng ngủ đẹp và chi tiết nhất? Tham khảo hướng dẫn decor phòng ngủ dưới đây để tìm ra ý tưởng trang trí phù hợp nhất với bạn nhé.', NULL, 'blog1.webp', 'post', '2023-10-16 04:49:14', '2023-10-16 04:49:14', 1, NULL, 1),
(9, 3, 'Ghế sofa bộ rời phù hợp với không gian phòng khách nào?', 'xzcxz', 'Những bộ ghế sofa sang trọng hay hiện đại, đơn giản hay cổ điển đều mang lại phong cách riêng. Bạn thích kiểu dáng, thiết kế của những bộ ghế sofa bộ rời nhưng không biết có phù hợp với phòng khách nhà bạn hay không. Bạn có thể tham khảo bài viết dưới đây để biết ghế sofa bộ rời phù hợp với không gian phòng khách nào nhé.', NULL, 'blog2.webp', 'post', '2023-10-16 05:42:29', '2023-10-16 05:42:29', 1, NULL, 1),
(10, NULL, 'Chính sách vận chuyển', 'chinh-sach-van-chuyen', 'Lofi Furniture có dịch vụ giao hàng tận nơi trên toàn quốc, áp dụng cho khách mua hàng trên website, fanpage và gọi điện thoại, không áp dụng cho khách mua trực tiếp tại cửa hàng.\r\n\r\nĐơn hàng sẽ được chuyển phát đến tận địa chỉ khách hàng cung cấp thông qua công ty vận chuyển trung gian.\r\n\r\n\r\n1. Thời gian giao hàng:\r\n\r\nĐơn hàng nội và ngoại thành Hà Nội:\r\nThời gian giao hàng là 1-2 ngày sau khi đặt hàng.\r\n\r\nĐơn hang trước 11h30 trưa thì sẽ giao trong buổi chiều cùng ngày\r\n\r\nĐơn hàng sau 11h30 sẽ giao trong buổi tối và sáng hôm sau.\r\n\r\nĐơn hàng ở các tỉnh thành khác:\r\nThời gian là 2-3 ngày đối với khu vực trung tâm tỉnh thành phố, 3-7 ngày đối với khu vực ngoại thành, huyện, xã, thị trấn…\r\n\r\n(Không tính thứ bảy, chủ nhật hay các ngày lễ tết)\r\n\r\nThời gian xử lý đơn hàng sẽ được tính từ khi nhận được thanh toán hoàn tất của quý khách.\r\n\r\nCó thể thay đổi thời gian giao hàng nếu khách hàng yêu cầu và Lofi Furniture chủ động đổi trong trường hợp chịu ảnh hưởng của thiên tai hoặc các sự kiện đặc biệt khác.\r\n\r\nĐơn hàng của quý khách sẽ được giao tối đa trong 2 lần. Trường hợp lần đầu giao hàng không thành công, sẽ có nhân viên liên hệ để sắp xếp lịch giao hàng lần 2 với quý khách, trong trường hợp vẫn không thể liên lạc lại được hoặc không nhận được bất kì phản hồi nào từ phía quý khách, đơn hàng sẽ không còn hiệu lực.\r\n\r\nĐể kiểm tra thông tin hoặc tình trạng đơn hàng của quý khách, xin vui lòng inbox fanpage hoặc gọi số hotline, cung cấp tên, số điện thoại để được kiểm tra.\r\n\r\nKhi hàng được giao đến quý khách, vui lòng ký xác nhận với nhân viên giao hàng và kiểm tra lại số lượng cũng như loại hàng hóa được giao có chính xác không. Xin quý khách vui lòng giữ lại biên lại vận chuyển và hóa đơn mua hàng để đối chiếu kiểm tra.\r\n\r\n2. Phí giao hàng:\r\n\r\nPhí ship cố định là 30,000đ áp dụng cho mọi khu vực\r\n', NULL, NULL, 'post', NULL, NULL, 1, NULL, 1),
(16, NULL, 'Chính sách mua hàng', 'chinh-sach-mua-hang', 'Đặt hàng\r\nHiện tại khách hàng có thể đến trực tiếp các địa chỉ mua hàng của Lofi Furniture để mua hàng trực tiếp hoặc đặt hàng. Đồng thời chúng tôi tiếp nhận đơn hàng qua điện thoại:\r\nHiện tại chúng tôi hỗ trợ đặt hàng với 03 hình thức sau đây:\r\n\r\nĐặt hàng trực tiếp tại cửa hàng\r\nĐặt hàng trực tuyến\r\nĐặt hàng qua hotline: 0987654321\r\nXác Nhận Đơn Hàng\r\nChúng tôi sẽ sử dụng các thông khách hàng cung cấp để tiến hành xác nhận đơn hàng.\r\n\r\nThay Đổi, Hủy Bỏ Giao Dịch tại\r\nTrong mọi trường hợp quý khách đều có quyền hủy bỏ đơn hàng sau khi thực hiện các biện pháp sau:\r\nThông báo cho về việc hủy đơn hàng qua đường dây nóng 0987654321\r\n\r\nChương Trình Ưu Đãi\r\nLofi Furniture có áp dụng chương trình chiết khấu ưu đãi dành cho khách hàng tại từng thời điểm cụ thể khác nhau\r\n\r\n', NULL, NULL, 'post', NULL, NULL, 1, NULL, 1),
(17, NULL, 'Chính sách bảo hành', 'chinh-sach-bao-hanh', 'Bước 1: Truy cập website và lựa chọn sản phẩm cần mua để mua hàng\r\n\r\nBước 2: Click và sản phẩm muốn mua, màn hình hiển thị ra pop up với các lựa chọn sau\r\n\r\nNếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua hàng để lựa chọn thêm sản phẩm vào giỏ hàng\r\n\r\nNếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem giỏ hàng\r\n\r\nNếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào: Đặt hàng và thanh toán\r\n\r\nBước 3: Lựa chọn thông tin tài khoản thanh toán\r\n\r\nNếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng nhập là email và mật khẩu vào mục đã có tài khoản trên hệ thống\r\n\r\nNếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng điền các thông tin cá nhân để tiếp tục đăng ký tài khoản. Khi có tài khoản bạn sẽ dễ dàng theo dõi được đơn hàng của mình\r\n\r\nNếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp chuột vào mục đặt hàng không cần tài khoản\r\n\r\nBước 4: Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình thức thanh toán và vận chuyển cho đơn hàng của mình\r\n\r\nBước 5: Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng\r\n\r\nSau khi nhận được đơn hàng bạn gửi chúng tôi sẽ liên hệ bằng cách gọi điện lại để xác nhận lại đơn hàng và địa chỉ của bạn.\r\n\r\nTrân trọng cảm ơn.\r\n\r\n', NULL, NULL, 'post', NULL, NULL, 1, NULL, 1),
(18, NULL, 'Chính sách đổi hàng', 'chinh-sach-doi-hang', '1. Điều kiện đổi trả\r\n\r\nQuý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp sau:\r\n\r\nHàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại thời điểm đặt hàng.\r\nKhông đủ số lượng, không đủ bộ như trong đơn hàng.\r\nTình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…\r\n Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa. \r\n\r\n2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả\r\n\r\nThời gian thông báo đổi trả: trong vòng 48h kể từ khi nhận sản phẩm đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng hoặc bể vỡ.\r\nThời gian gửi chuyển trả sản phẩm: trong vòng 14 ngày kể từ khi nhận sản phẩm.\r\nĐịa điểm đổi trả sản phẩm: Khách hàng có thể mang hàng trực tiếp đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện.\r\nTrong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi.', NULL, NULL, 'post', NULL, NULL, 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_product`
--

CREATE TABLE `db_product` (
  `id` bigint UNSIGNED NOT NULL,
  `category_id` int UNSIGNED NOT NULL,
  `brand_id` int UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `detail` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `pricesale` double DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_product`
--

INSERT INTO `db_product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `detail`, `description`, `image`, `price`, `pricesale`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 12, 1, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'ao-len-nam-totoday-ao-len-soc-lon-mau', '<p>&Aacute;O LEN NAM - TOTODAY - &Aacute;O LEN SỌC LỚN M&Agrave;U</p>\r\n', 'ÁO LEN NAM - TOTODAY - ÁO LEN SỌC LỚN MÀU', '1-25a36b22-6b1f-4e35-aeb7-171becb5abce.webp', 378000, 0, '2022-11-22 11:40:37', '2022-11-22 11:40:37', 1, 1, 1),
(2, 11, 1, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'ao-len-nam-totoday-ao-len-soc-phoi-mau', '&Aacute;O LEN NAM - TOTODAY - &Aacute;O LEN SỌC PHỐI M&Agrave;U\n', 'ÁO LEN NAM - TOTODAY - ÁO LEN SỌC PHỐI MÀU', '1-c70c380a-27aa-4f19-8203-2dc256edb392.webp', 378000, 0, '2022-11-22 11:42:49', '2022-11-22 11:42:49', 1, 1, 1),
(3, 12, 1, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'ao-len-nam-totoday-ao-len-traffic', '<h1>&Aacute;O LEN NAM - TOTODAY - &Aacute;O LEN TRAFFIC</h1>\r\n', 'ÁO LEN NAM - TOTODAY - ÁO LEN TRAFFIC', '1-70f8ef3f-aa5e-4786-8ce0-9bea7015ad92.webp', 378000, 0, '2022-11-22 11:48:35', '2022-11-22 11:48:35', 1, 1, 1),
(4, 11, 1, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'ao-len-nam-totoday-ao-len-nhieu-mau', '<h1>&Aacute;O LEN NAM - TOTODAY - &Aacute;O LEN NHIỀU M&Agrave;U</h1>\r\n', 'ÁO LEN NAM - TOTODAY - ÁO LEN NHIỀU MÀU', '2-d053f572-d9ac-46c3-8505-6b5b9b783e83.webp', 10000, 0, '2022-11-22 11:49:40', '2022-11-22 11:49:40', 1, 1, 1),
(5, 12, 1, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'ao-so-mi-nam-totoday-the-basic', '<h1>&Aacute;O SƠ MI NAM - TOTODAY - THE BASIC</h1>\r\n', 'ÁO SƠ MI NAM - TOTODAY - THE BASIC', '20.webp', 10000, 0, '2022-11-22 12:11:51', '2022-11-22 12:15:16', 1, 1, 1),
(6, 11, 1, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'ao-so-mi-nam-totoday-cool-shirt', '<h1>&Aacute;O SƠ MI NAM - TOTODAY - THE BASIC</h1>\r\n', 'ÁO SƠ MI NAM - TOTODAY - COOL SHIRT', '1-64539de7-7cf2-4d3b-b06a-99914e8153bc.webp', 10000, 0, '2022-11-22 12:11:51', '2022-11-22 12:14:52', 1, 1, 1),
(7, 12, 1, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'ao-so-mi-nam-totoday-simple-shirt', '<h1>&Aacute;O SƠ MI NAM - TOTODAY - SIMPLE SHIRT</h1>\r\n', 'ÁO SƠ MI NAM - TOTODAY - SIMPLE SHIRT', 'art-print-0888.webp', 10000, 0, '2022-11-22 12:16:17', '2022-11-22 12:16:17', 1, 1, 1),
(8, 12, 1, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'ao-so-mi-nam-totoday-format', '<h1>&Aacute;O SƠ MI NAM - TOTODAY - FORMAT</h1>\r\n', 'ÁO SƠ MI NAM - TOTODAY - FORMAT', 'art-print-0889.webp', 10000, 0, '2022-11-22 12:16:51', '2022-11-22 12:16:51', 1, 1, 1),
(9, 11, 1, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'shorts-jean-nam-totoday-11203', '<h1>SHORTS JEAN NAM - TOTODAY - 11203</h1>\r\n', 'SHORTS JEAN NAM - TOTODAY - 11203', '1-72755d7a-c9a2-422a-86db-52df0f5677ee.webp', 10000, 0, '2022-11-22 12:17:53', '2022-11-22 12:17:53', 1, 1, 1),
(10, 12, 1, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'shorts-jean-nam-totoday-11202', '<h1>SHORTS JEAN NAM - TOTODAY - 11202</h1>\r\n', 'SHORTS JEAN NAM - TOTODAY - 11202', '1-56783634-dc78-4a89-8b9d-b5935db39674.webp', 10000, 0, '2022-11-22 12:19:09', '2022-11-22 12:19:09', 1, 1, 1),
(11, 11, 1, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'shorts-jean-nam-totoday-11201', '<h1>SHORTS JEAN NAM - TOTODAY - 11201</h1>\r\n', 'SHORTS JEAN NAM - TOTODAY - 11201', '1-bfe4b656-802c-4987-a029-5e7b108a4364.webp', 10000, 0, '2022-11-22 12:19:43', '2022-11-22 12:19:43', 1, 1, 1),
(12, 12, 1, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'shorts-thun-nam-totoday-freedom-totoday', '<h1>SHORTS THUN NAM - TOTODAY - FREEDOM TOTODAY</h1>\r\n', 'SHORTS THUN NAM - TOTODAY - FREEDOM TOTODAY', 'zb04-product.webp', 10000, 0, '2022-11-22 12:20:53', '2022-11-22 12:20:53', 1, 1, 1),
(13, 12, 4, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'quan-jean-nam-slimfit-totoday-10206', '<h1>QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10206</h1>\r\n', 'QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10206', '1-a3b2a985-df65-401f-97e9-43af98a52fee.webp', 10000, 0, '2022-11-22 12:21:58', '2022-11-22 12:21:58', 1, 1, 1),
(14, 12, 3, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'quan-jean-nam-slimfit-totoday-10205', '<h1>QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10205</h1>\r\n', 'QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10205', '1-9e3c32e5-e3dc-4437-8e7e-cbbe9bda2e8d.webp', 10000, 0, '2022-11-22 12:22:27', '2022-11-22 12:22:27', 1, 1, 1),
(15, 11, 2, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'quan-jean-nam-slimfit-totoday-10204', '<h1>QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10204</h1>\r\n', 'QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10204', '1-5198a174-8af9-4f38-b1a4-565aff5dfbc9 (1).webp', 10000, 0, '2022-11-22 12:22:56', '2022-11-22 12:22:56', 1, 1, 1),
(16, 12, 4, 'ĐÈN BÀN THÂN ĐÁ MARBLE', 'quan-jean-nam-slimfit-totoday-10203', '<h1>QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10203</h1>\r\n', 'QUẦN JEAN NAM - SLIMFIT - TOTODAY - 10203', '1-aaa5fda3-ba46-4b44-b1c7-f855f0e50144.webp', 10000, 0, '2022-11-22 12:23:18', '2022-11-22 12:23:18', 1, 1, 1),
(17, 12, 4, 'ĐÈN BÀN THÂN ĐÁ MARBLE', 'ao-thun-w2atn09203fosht', '<h1>&Aacute;O THUN W2ATN09203FOSHT</h1>\r\n', 'ÁO THUN W2ATN09203FOSHT', 'anh-2.webp', 10000, 0, '2022-11-22 12:24:58', '2022-11-22 12:24:58', 1, 1, 1),
(18, 12, 4, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'ao-thun-w2atn09201fosht', '<h1>&Aacute;O THUN W2ATN09201FOSHT</h1>\r\n', 'ÁO THUN W2ATN09201FOSHT', '14-c11bac47-2369-4ec7-bcba-25bc52878951.webp', 10000, 0, '2022-11-22 12:26:02', '2022-11-22 12:26:02', 1, 1, 1),
(19, 12, 4, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'ao-thun-w2atn08213bosht', '<h1>&Aacute;O THUN W2ATN08213BOSHT</h1>\r\n', 'ÁO THUN W2ATN08213BOSHT', '1-6ad96e97-197c-4a56-a6ac-d76a091f6a93.webp', 10000, 0, '2022-11-22 12:26:25', '2022-11-22 12:26:25', 1, 1, 1),
(20, 11, 4, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'ao-thun-w2atn08210bosba', '<h1>&Aacute;O THUN W2ATN08210BOSBA</h1>\r\n', 'ÁO THUN W2ATN08210BOSBA', '1-3fad6533-a0f9-4bb8-81d2-f717990abdd6.webp', 10000, 0, '2022-11-22 12:26:44', '2022-11-22 12:26:44', 1, 1, 1),
(21, 11, 4, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'ao-somi-w2smd05204bostr', '<h1>&Aacute;O SƠMI W2SMD05204BOSTR</h1>\r\n', 'ÁO SƠMI W2SMD05204BOSTR', '1-8386d26e-634e-4a2a-885d-e94793f4808a.webp', 10000, 0, '2022-11-22 12:29:53', '2022-11-22 12:29:53', 1, 1, 1),
(22, 11, 3, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'ao-somi-w2smn05201bostr', '<h1>&Aacute;O SƠMI W2SMN05201BOSTR</h1>\r\n', 'ÁO SƠMI W2SMN05201BOSTR', '1-abe425d3-63f1-4747-8d57-8b75c448e745.webp', 10000, 0, '2022-11-22 12:30:23', '2022-11-22 12:30:23', 1, 1, 1),
(23, 12, 3, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'ao-somi-w2smd05203bostr', '<h1>&Aacute;O SƠMI W2SMD05203BOSTR</h1>\r\n', 'ÁO SƠMI W2SMD05203BOSTR', '1-5198a174-8af9-4f38-b1a4-565aff5dfbc9.webp', 10000, 0, '2022-11-22 12:30:45', '2022-11-22 12:30:45', 1, 1, 1),
(24, 12, 3, 'SOFA VĂNG BỌC DA BÒ NHẬP', 'set-somi-w2set05201foscr', '<h1>SET SƠMI W2SET05201FOSCR</h1>\r\n', 'SET SƠMI W2SET05201FOSCR', '1-d660324d-dd5d-4280-b849-ae16b2ccc1df.webp', 10000, 0, '2022-11-22 12:31:09', '2022-11-22 12:31:09', 1, 1, 1),
(25, 12, 3, 'ĐÈN CHÙM THẢ ROYAL CRYSTAL', 'shorts-jean-nu-wash-totoday-10205', 'ĐÈN CHÙM THẢ ROYAL CRYSTAL', 'ĐÈN CHÙM THẢ ROYAL CRYSTAL', '1-bd1b2a6b-d406-4e16-97d7-558f9acfeaeb.webp', 10000, 0, '2022-11-22 12:34:00', '2022-11-22 12:34:00', 1, 1, 1),
(26, 11, 4, 'ĐÈN NGỦ ĐỂ BÀN', 'shorts-jean-nu-totoday-10205', 'ĐÈN NGỦ ĐỂ BÀN', 'ĐÈN NGỦ ĐỂ BÀN', '1-6651e4fa-f402-4bd9-9670-2bb4b79a9952.webp', 10000, 0, '2022-11-22 12:34:21', '2022-11-22 12:34:21', 1, 1, 1),
(27, 12, 3, 'Cây trang trí GODSKE nhựa nhiều màu', 'shorts-jean-nu-totoday-10203', 'Cây trang trí GODSKE nhựa nhiều màu', 'Cây trang trí GODSKE nhựa nhiều màu', '1-53837762-48ac-4f60-ab55-69339e27af3e.webp', 10000, 0, '2022-11-22 12:34:52', '2022-11-22 12:34:52', 1, 1, 1),
(28, 11, 4, 'Cây trang trí GODSKE nhựa nhiều màu', 'shorts-jean-nu-rach-totoday-10202', 'Cây trang trí GODSKE nhựa nhiều màuCây trang trí GODSKE nhựa nhiều màu', 'Cây trang trí GODSKE nhựa nhiều màu', '1-17cf6e2d-489e-49da-85ff-36c4542eba99.webp', 10000, 0, '2022-11-22 12:35:13', '2022-11-22 12:35:13', 1, 1, 1),
(29, 11, 3, 'CÂY TRANG TRÍ KALLE NHỰA', 'quan-jean-w2qjn05203fbgtr', 'CÂY TRANG TRÍ KALLE NHỰA', 'CÂY TRANG TRÍ KALLE NHỰA', '1-d6da9f7b-fa92-48a6-980d-edc51efb885c.webp', 10000, 0, '2022-11-22 12:38:14', '2022-11-22 12:38:15', 1, 1, 1),
(30, 11, 2, 'TỦ QUẦN ÁO JOEY', 'quan-jean-w2qjn05202fbgtr', 'TỦ QUẦN ÁO JOEY', 'TỦ QUẦN ÁO JOEY', '1-30b88d88-a786-41e2-a699-0228944b60d7.webp', 10000, 0, '2022-11-22 12:38:39', '2022-11-22 12:38:39', 1, 1, 1),
(31, 11, 4, 'ĐÈN TRANG TRÍ LEFT HEAT', 'quan-jean-w2qjn05201fbgtr', 'ĐÈN TRANG TRÍ LEFT HEAT', 'ĐÈN TRANG TRÍ LEFT HEAT', '2-5fd67d62-06e6-4398-a5f4-9ae167e37dc6.webp', 10000, 0, '2022-11-22 12:38:59', '2022-11-22 12:38:59', 1, 1, 1),
(32, 11, 3, 'GHẾ DA ARMCHAIR OAKWAY', 'quan-jean-w2qjn04208fbgtr', 'GHẾ DA ARMCHAIR OAKWAY', 'GHẾ DA ARMCHAIR OAKWAY', 'frame-1000002981.webp', 10000, 0, '2022-11-22 12:39:47', '2022-11-22 12:39:48', 1, 1, 1),
(33, 12, 2, 'GIƯỜNG NGỦ 1.6M PLATFORM', 'chan-vay-jean-nu-totoday-10201', '<h1>CH&Acirc;N V&Aacute;Y JEAN NỮ - TOTODAY - 10201</h1>\r\n', NULL, '1-09f497d2-6a5c-4663-a74c-84337a3168b1.webp', 10000, 0, '2022-11-22 12:41:15', '2022-11-22 12:41:15', 1, 1, 1),
(34, 12, 4, 'ĐÈN NGƯỜI ÔM BÓNG ĐÈN', 'den-nguoi-om-bong-den', 'Đèn trang trí Kibi thường được sử dụng trong khu vực chính như: phòng ngủ, phòng ăn, phòng bếp hoặc phòng khách. Bên cạnh đó, bạn cũng có thể trang trí đèn cho phòng ngủ, tăng thêm tính thẩm mỹ cho không gian căn phòng. \nViệc treo đèn ở hai bên giường, sẽ giúp không gian bạn trở nên tinh tế và hiện đại hơn. Mặt khác, sử dụng đèn trang trí còn là giải pháp giúp cung cấp đủ ánh sáng cho các hoạt động như trang điểm hay đọc sách.\n\nXuất xứ: Trung Quốc\n\nKích thước: 77cmx180cm\n\nCân nặng: 65kg\n\nChất liệu: chân đèn chắc chắn từ thép không gỉ sơn tĩnh điện. Chụp đèn bằng thủy tinh cao cấp\n\nMàu sắc: Đen', NULL, 'nguoiomden.webp', 10000, 0, '2022-11-22 12:41:36', '2022-11-22 12:41:36', 1, 1, 1),
(35, 12, 3, 'ĐÈN CHÙM ROSEMAS PHA LÊ', 'den-trang-tri-left-heat', 'Xuất xứ: Trung Quốc\nKích thước: 55cmx155cm\nCân nặng: 9 kg\nChất liệu: Gỗ, thép không gỉ, vải chịu nhiệt\nMàu sắc: Trắng đen\nHiệu điện thế: 220V', NULL, 'anh.webp', 10000, 0, '2022-11-22 12:41:58', '2022-11-22 12:41:58', 1, 1, 1),
(36, 12, 2, 'Bàn gỗ xếp cạnh', 'chan-vay-w2cnv06201foscr', 'Bàn gỗ xếp cạnh', 'Bàn gỗ xếp cạnh', 'anh-1.webp', 10000, 0, '2022-11-22 12:42:21', '2022-11-22 12:42:21', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_topic`
--

CREATE TABLE `db_topic` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_topic`
--

INSERT INTO `db_topic` (`id`, `name`, `slug`, `sort_order`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(3, 'Tin tức', 'tin-tuc', 0, 'Mô tả tin tức', '2023-10-16 05:30:30', '2023-10-16 05:33:26', 1, NULL, 1),
(4, 'Dịch vụ', 'dich-vu', 0, 'Chủ đề dịch vụ', '2023-10-16 05:30:48', '2023-10-16 05:33:38', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_user`
--

CREATE TABLE `db_user` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` enum('admin','customer') COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_user`
--

INSERT INTO `db_user` (`id`, `name`, `username`, `password`, `gender`, `phone`, `email`, `roles`, `image`, `address`, `remember_token`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Hồ Diên Lợi', 'admin', '$2y$10$0P0YqcR5euwqb2muHoeUXOnIBxRJDLcAJ5BRe28RpgqEPFH1tBK5u', '1', '098777', 'admin@gmail.com', 'admin', NULL, NULL, NULL, NULL, '2023-10-29 07:24:10', 1, 1, 1),
(3, 'Khách hàng', 'khachhang', '$2y$10$46Al6Lw0BCmUDTCEyrQkL.9XTK8OhWQNE4x3/M6vsWuvqeA2GZZ2a', '1', '090999', 'hodienloi@gmail.com', 'customer', NULL, 'BinhDUong', NULL, '2023-10-14 04:56:06', '2023-10-29 08:54:49', 1, 1, 2),
(4, 'Hồ DIên Lợi', 'khach1', '$2y$10$AgC5OIcxdzFi0.NERqcLuenfQRLaXp9kkyAn4jIjpFarMT9atd1h6', '1', '0987654321', 'hodienloi1@gmail.com', 'customer', NULL, 'Hồ Chí Minh', NULL, '2023-10-17 10:01:45', '2023-10-17 10:01:45', 1, NULL, 1),
(5, 'Hồ DIên Lợi', 'khach3', '$2y$10$2dFQ3JBNHJ28hEz2U36uPO6Ows4KQ0G5Wzuwj4i.nwhrScTUOPcV2', '1', '0987654321', 'hodienloi2@gmail.com', 'customer', NULL, 'Hồ Chí Minh', NULL, '2023-10-17 10:04:20', '2023-10-17 10:04:20', 1, NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `db_banner`
--
ALTER TABLE `db_banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_brand`
--
ALTER TABLE `db_brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_category`
--
ALTER TABLE `db_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_contact`
--
ALTER TABLE `db_contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_menu`
--
ALTER TABLE `db_menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_order`
--
ALTER TABLE `db_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_post`
--
ALTER TABLE `db_post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_product`
--
ALTER TABLE `db_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_topic`
--
ALTER TABLE `db_topic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_user`
--
ALTER TABLE `db_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `db_banner`
--
ALTER TABLE `db_banner`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `db_brand`
--
ALTER TABLE `db_brand`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `db_category`
--
ALTER TABLE `db_category`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `db_contact`
--
ALTER TABLE `db_contact`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `db_menu`
--
ALTER TABLE `db_menu`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=513;

--
-- AUTO_INCREMENT for table `db_order`
--
ALTER TABLE `db_order`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `db_post`
--
ALTER TABLE `db_post`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `db_product`
--
ALTER TABLE `db_product`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1006;

--
-- AUTO_INCREMENT for table `db_topic`
--
ALTER TABLE `db_topic`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `db_user`
--
ALTER TABLE `db_user`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
