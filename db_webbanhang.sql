-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 22, 2024 at 02:39 AM
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
-- Database: `db_webbanhang`
--

-- --------------------------------------------------------

--
-- Table structure for table `db_banner`
--

CREATE TABLE `db_banner` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
(4, 'slider_1', 'slider1.webp', '#', 'slideshow', NULL, 1, 1, '2023-10-17 09:15:58', '2023-10-28 05:38:33', 1),
(5, 'slider_2', 'slider2.webp', 'xZxz', 'slideshow', 'xzxzx', 1, 1, '2023-10-28 05:49:15', '2023-10-31 05:28:56', 1),
(8, 'sadsad', 'hitu.png', 'ádasd', 'ádsad', NULL, 1, NULL, NULL, NULL, 1),
(9, 'sadsad', 'hitu.png', 'ádasd', 'ádsad', NULL, 1, NULL, NULL, NULL, 1),
(10, 'sadsad', 'hitu.png', 'ádasd', 'ádsad', NULL, 1, NULL, NULL, NULL, 1),
(18, 'slider_3', 'slider0.jpg', 'ádsa', 'slideshow', NULL, 1, NULL, '2024-05-04 13:29:30', NULL, 1),
(37, 'nguyen phat dat', 'img-grid-3.jpg', 'sad', 'slideshow', 'dá', 1, NULL, '2024-09-03 15:04:04', NULL, 2),
(38, 'nguyen phat dat', 'person-1.png', 'sad', 'slideshow', 'sa', 1, NULL, '2024-09-03 15:04:58', NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `db_brand`
--

CREATE TABLE `db_brand` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
(1, 'France', 'france', 'person_2.jpg', 0, 'Mô tả Seo', '2024-09-02 16:18:50', NULL, 1, NULL, 2),
(2, 'Korean', 'korean', '', 0, 'Mô tả SEO', '2020-07-03 02:06:19', '2023-12-28 04:07:23', 1, 1, 2),
(3, 'Thailand', 'thailand', '', 0, 'Mô tả SEO', '2020-07-03 02:06:19', '2022-11-19 00:54:36', 1, 1, 2),
(45, 'ho dien lợi', NULL, 'contact.png', 0, 'adad', '2024-09-01 12:26:32', NULL, 1, NULL, 2),
(46, 'nguyeendat', NULL, 'bowl-2.png', 0, '', '2024-09-06 14:46:37', NULL, 1, NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `db_cart`
--

CREATE TABLE `db_cart` (
  `product_id` int NOT NULL,
  `qty` int NOT NULL,
  `id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `db_cart`
--

INSERT INTO `db_cart` (`product_id`, `qty`, `id`) VALUES
(35, 1, 196),
(33, 7, 209),
(1019, 3, 230);

-- --------------------------------------------------------

--
-- Table structure for table `db_category`
--

CREATE TABLE `db_category` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int UNSIGNED NOT NULL DEFAULT '0',
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
(1, 'Modern', 'hien-dai', 'Team3.e4cabd1.png', 0, 0, 'Đồ nam', '2022-11-22 11:17:31', '2023-10-17 09:35:23', 1, 1, 1),
(2, 'Cổ điển', 'co-dien', 'Team3.e4cabd1.png', 0, 0, 'Đồ nữ', '2022-11-22 11:18:00', '2023-10-17 09:35:35', 1, 1, 1),
(3, 'Áo thun nam', 'ao-thun-nam', 'Team3.e4cabd1.png', 1, 0, 'Áo thun nam', '2022-11-22 11:18:27', '2022-11-22 11:18:27', 1, 0, 1),
(4, 'Lợi đep', 'ao-so-mi-nam', 'Team3.e4cabd1.png', 1, 0, 'Áo sơ mi nam', '2022-11-22 11:18:53', '2022-11-22 11:18:53', 1, 0, 1),
(5, 'Quần short nam', 'quan-short-nam', 'Team3.e4cabd1.png', 1, 0, 'Quần short nam', '2022-11-22 11:19:32', '2022-11-22 11:19:32', 1, 0, 1),
(6, 'Quần dài nam', 'quan-dai-nam', 'Team3.e4cabd1.png', 1, 0, 'Quần dài nam', '2022-11-22 11:19:57', '2022-11-22 11:19:57', 1, 0, 1),
(7, 'Áo thun nữ', 'ao-thun-nu', 'Team3.e4cabd1.png', 2, 0, 'Áo thun nữ', '2022-11-22 11:21:27', '2022-11-22 11:21:27', 1, 0, 1),
(8, 'Áo sơ mi nữ', 'ao-so-mi-nu', 'Team3.e4cabd1.png', 2, 0, 'Áo sơ mi nữ', '2022-11-22 11:21:43', '2022-11-22 11:21:43', 1, 0, 1),
(9, 'Áo kiểu', 'ao-kieu', 'Team3.e4cabd1.png', 2, 0, 'Áo kiểu', '2022-11-22 11:22:00', '2022-11-22 11:22:00', 1, 0, 1),
(10, 'Quần short nữ', 'quan-short-nu', 'Team3.e4cabd1.png', 2, 0, 'Quần short nữ', '2022-11-22 11:22:14', '2022-11-22 11:22:14', 1, 0, 1),
(11, 'Classical', 'classical', 'Team3.e4cabd1.png', 2, 0, 'Quần dài nữ', '2022-11-22 11:22:48', '2023-10-17 21:56:13', 1, 1, 1),
(12, 'Modern', 'modern', 'Team3.e4cabd1.png', 2, 0, NULL, '2022-11-22 11:23:07', '2023-10-17 21:56:07', 1, 1, 1),
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
(104, 'nguyeendat', '', 'couch.png', 0, 0, '', '2024-09-06 14:46:20', NULL, 1, NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `db_contact`
--

CREATE TABLE `db_contact` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` int UNSIGNED DEFAULT '0',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `replay_id` int UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2',
  `image` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_contact`
--

INSERT INTO `db_contact` (`id`, `user_id`, `name`, `email`, `phone`, `title`, `content`, `replay_id`, `created_at`, `updated_at`, `updated_by`, `status`, `image`) VALUES
(1, NULL, 'Hồ DIên Lợi', 'hodienloi@gmail.com', '0987654321', 'Ho hoi', 'Ho hoi', 0, '2023-10-17 00:44:40', '2023-10-29 20:44:12', 1, 1, NULL),
(2, NULL, 'Hồ DIên Lợi', 'hodienloi@gmail.com', '0987654321', 'áds', 'sadasd', 0, '2023-10-17 00:47:31', '2023-10-16 11:33:17', 1, 1, NULL),
(3, NULL, 'Hồ DIên Lợi', 'hodienloi@gmail.com', '090999', 'sad', 'sds', 0, '2023-10-17 00:52:48', '2023-10-16 10:52:48', NULL, 2, NULL),
(4, NULL, 'Hồ DIên Lợi', 'hodienloi@gmail.com', '090999', 'sad', 'sadsads', 3, '2023-10-17 01:24:59', '2023-10-16 11:27:27', 1, 1, NULL),
(5, NULL, 'Hồ DIên Lợi', 'hodienloi@gmail.com', '090999', 'sad', 'Noi dung tra lời', 4, '2023-10-17 01:27:27', '2023-10-16 11:27:27', NULL, 2, NULL),
(6, NULL, 'Hồ DIên Lợi', 'hodienloi@gmail.com', '0987654321', 'áds', 'sadsadsd', 2, '2023-10-17 01:33:17', '2023-10-16 11:33:17', NULL, 2, NULL),
(7, NULL, 'Hồ DIên Lợi', 'hodienloi@gmail.com', '0987654321', 'Ho hoi', 'ádasd', 1, '2023-10-30 10:25:55', '2023-10-29 20:25:55', NULL, 2, NULL),
(10, 0, 'Nguyen Phat Dat', 'dat48421@gmail.com', '0845-553-994', 'adsa', 'ád', NULL, '2024-08-06 19:01:01', NULL, NULL, 2, '07_NguyenPhatDat.docx'),
(19, 0, 'da ada', 'dat48421@gmail.com', '0845553994', 'ádsa', 'ád', NULL, '2024-09-03 19:44:12', NULL, NULL, 2, NULL),
(20, 0, 'da ada', 'dat48421@gmail.com', '0', '', '', NULL, '2024-09-03 22:03:25', NULL, NULL, 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `db_menu`
--

CREATE TABLE `db_menu` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int UNSIGNED DEFAULT '0',
  `parent_id` int UNSIGNED DEFAULT '0',
  `type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `table_id` int UNSIGNED DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2',
  `image` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_menu`
--

INSERT INTO `db_menu` (`id`, `name`, `link`, `sort_order`, `parent_id`, `type`, `position`, `table_id`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `image`) VALUES
(1, 'Home', 'http://localhost:3000/home', 1, 0, 'custom', 'mainmenu', 0, '2022-11-22 05:36:05', '2023-11-02 11:40:19', 1, 1, 0, NULL),
(2, 'About us', 'about-us', 2, 0, 'page', 'mainmenu', 39, '2022-11-22 06:13:46', '2023-10-17 18:31:44', 1, 1, 0, NULL),
(10, 'Modern', 'category/modern', 13, 15, 'category', 'mainmenu', 6, '2022-11-22 06:14:09', '2023-11-02 11:42:40', 1, 1, 0, NULL),
(11, 'Classical', 'category/classical', 12, 15, 'category', 'mainmenu', 5, '2022-11-22 06:14:09', '2023-11-02 11:43:09', 1, 1, 0, NULL),
(14, 'Shop', 'shop', 4, 0, 'category', 'mainmenu', 2, '2022-11-22 06:14:09', '2023-11-02 11:44:07', 1, 1, 0, NULL),
(15, 'Category', 'category', 14, 0, 'category', 'mainmenu', 4, '2022-11-22 06:14:09', '2023-11-02 11:44:10', 1, 1, 0, NULL),
(49, 'Thương hiệu', 'brand', 1, 0, 'brand', 'mainmenu', 7, '2024-01-07 16:24:15', '2024-01-07 16:24:15', 1, 1, 2, NULL),
(50, 'Korean', 'brand/korean', 1, 49, 'brand', 'mainmenu', 2, '2023-11-02 11:30:50', '2023-11-02 11:30:50', 1, 1, 2, NULL),
(51, 'ThaiLand', 'korean/thailand', 1, 49, 'brand', 'mainmenu', 3, '2023-11-02 11:30:50', '2023-11-02 11:30:50', 1, 1, 2, NULL),
(53, 'Blog', 'blog', 1, 0, 'topic', 'mainmenu', 4, '2023-10-26 21:04:07', '2023-11-02 11:45:15', 1, 1, 0, NULL),
(55, 'Dịch vụ', 'dich-vu', 3, 53, 'post', 'mainmenu', 6, '2023-10-17 15:26:44', '2023-11-02 11:44:22', 1, 1, 0, NULL),
(516, 'nguyen phat dat', 'ád', 0, 0, NULL, '0', NULL, '2024-09-03 15:03:46', NULL, 1, NULL, 2, 'contact.png');

-- --------------------------------------------------------

--
-- Table structure for table `db_order`
--

CREATE TABLE `db_order` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` int UNSIGNED DEFAULT NULL,
  `delivery_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delivery_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delivery_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delivery_address` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2',
  `image` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `total` int DEFAULT NULL,
  `order_status` int DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_order`
--

INSERT INTO `db_order` (`id`, `user_id`, `delivery_name`, `delivery_gender`, `delivery_email`, `delivery_phone`, `delivery_address`, `note`, `created_at`, `type`, `updated_at`, `updated_by`, `status`, `image`, `qty`, `total`, `order_status`) VALUES
(156, NULL, 'nguyen dat', NULL, 'dat48421@gmail.com', '0845553994', 'ưqeq', '', '2024-10-30 04:55:33', 'default_type', NULL, NULL, 2, NULL, NULL, NULL, 1);

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
  `title` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` enum('post','page') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
(24, 1, 'Fast & Free Shipping', NULL, NULL, 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.', 'truck.svg', 'post', '2024-09-03 03:05:01', NULL, 1, NULL, 1),
(25, 2, 'Easy to Shop', NULL, NULL, 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.', 'bag.svg', 'post', '2024-09-03 03:05:42', NULL, 1, NULL, 1),
(26, 3, '24/7 Support', NULL, NULL, 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.', 'support.svg', 'post', '2024-09-03 03:06:05', NULL, 1, NULL, 1),
(27, 4, 'Hassle Free Returns', NULL, NULL, 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.', 'return.svg', 'post', '2024-09-03 03:06:24', NULL, 1, NULL, 1),
(28, NULL, 'Lawson Arnold', NULL, 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.', 'CEO, Founder, Atty.', 'person_1.jpg', 'page', '2024-09-03 04:51:00', NULL, 1, NULL, 1),
(29, NULL, 'Jeremy Walker', NULL, 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.', 'CEO, Founder, Atty.', 'person_2.jpg', 'page', '2024-09-03 04:51:56', NULL, 1, NULL, 1),
(30, NULL, 'Patrik White', NULL, 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.', 'CEO, Founder, Atty.', 'person_3.jpg', 'page', '2024-09-03 04:52:34', NULL, 1, NULL, 2),
(31, NULL, 'Kathryn Ryan', NULL, 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.', 'CEO, Founder, Atty.', 'person_4.jpg', 'page', '2024-09-03 04:53:30', NULL, 1, NULL, 1),
(34, NULL, 'haha', NULL, 'hahah', 'hahah', 'contact.png', 'page', '2024-09-03 14:42:34', NULL, 1, NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `db_product`
--

CREATE TABLE `db_product` (
  `id` bigint UNSIGNED NOT NULL,
  `category_id` int UNSIGNED NOT NULL,
  `brand_id` int UNSIGNED NOT NULL,
  `name` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(10000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `pricesale` double DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2',
  `qty` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_product`
--

INSERT INTO `db_product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `detail`, `description`, `image`, `price`, `pricesale`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `qty`) VALUES
(1, 12, 1, 'Set Tủ Quần Áo Gỗ', 'set-tu-quan-ao-go', '', '', '1-25a36b22-6b1f-4e35-aeb7-171becb5abce.webp', 378000, 0, '2022-11-22 11:40:37', '2024-09-03 01:29:34', 1, 1, 1, 0),
(2, 11, 1, 'Tủ Quần Áo Gỗ 2 Cánh ', 'tu-quan-ao-go-2-canh', '', '', '1-c70c380a-27aa-4f19-8203-2dc256edb392.webp', 378000, 0, '2022-11-22 11:42:49', '2024-09-03 01:29:41', 1, 1, 1, 0),
(3, 12, 1, 'Tủ quần áo VIENNA Ver 1 H50', 'tu-quan-ao-vienna-ver-1-h50', '', '', '1-70f8ef3f-aa5e-4786-8ce0-9bea7015ad92.webp', 378000, 0, '2022-11-22 11:48:35', '2024-09-03 01:28:07', 1, 1, 1, 0),
(4, 11, 1, 'Tủ quần áo hiện đại đẹp TA22.001', 'tu-quan-ao-hien-dai-dep-ta22-001', '', '', '2-d053f572-d9ac-46c3-8505-6b5b9b783e83.webp', 10000, 0, '2022-11-22 11:49:40', '2024-09-03 01:22:30', 1, 1, 1, 0),
(6, 11, 1, 'Kệ ti vi hiện đại tiện nghi KTV22.001', 'ke-ti-vi-hien-dai-tien-nghi-ktv22-001', '', '', '1-64539de7-7cf2-4d3b-b06a-99914e8153bc.webp', 10000, 0, '2022-11-22 12:11:51', '2024-09-03 01:23:44', 1, 1, 1, 0),
(7, 12, 1, 'Tranh Trừu Tượng - VQ719', 'tranh-truu-tuong-vq719', '', '', 'art-print-0888.webp', 10000, 0, '2022-11-22 12:16:17', '2024-09-03 01:35:07', 1, 1, 1, 0),
(8, 12, 1, 'Tranh Trừu Tượng - VQ721', 'tranh-truu-tuong-vq721', '', '', 'art-print-0889.webp', 10000, 0, '2022-11-22 12:16:51', '2024-09-03 01:34:44', 1, 1, 1, 0),
(9, 11, 1, 'Giường Ngủ Ngăn Kéo Liền Kệ Đầu Giường Tatana MDF051', 'giuong-ngu-ngan-keo-lien-ke-dau-giuong-tatana-mdf051', '', '', '1-72755d7a-c9a2-422a-86db-52df0f5677ee.webp', 10000, 0, '2022-11-22 12:17:53', '2024-09-03 01:18:36', 1, 1, 1, 0),
(10, 12, 1, 'Giường ngủ ngăn kéo Tatana MDF054', 'giuong-ngu-ngan-keo-tatana-mdf054', '', '', '1-56783634-dc78-4a89-8b9d-b5935db39674.webp', 10000, 0, '2022-11-22 12:19:09', '2024-09-03 01:18:15', 1, 1, 1, 0),
(11, 12, 1, 'Giường Ngủ Gỗ MDF 3 Hộc Kéo Tatana MDF055', 'giuong-ngu-go-mdf-3-hoc-keo-tatana-mdf055', '✔️ Kích thước: ● Chiều rộng giường: 100/120/140/160/180cm ● Chiều dài giường: 200cm ● Chiều cao giường: 45cm\n\n✔️ Chất liệu: Gỗ MDF lõi xanh (chống ẩm) cao cấp phủ Melamine, đặc tính chống thấm nước với kết cấu chắc chắn, chống cong vênh, mối mọt trong suốt quá trình sử dụng.\n\n✔️ Màu sắc: Vân gỗ, Trắng, Xám\n\n✔️ Khách cần tư vấn và thiết kế kiểu dáng, màu sắc khác, vui lòng liên hệ shop qua khung chat hoặc thông tin bên dưới ạ.\n\n✔️ Bảo hành 24 tháng cho kết cấu sản phẩm.\n\n✔️ Thương hiệu: TATANA\n\n✔️ Xuất xứ: Việt Nam\n\n', 'Mẫu Giường ngủ gỗ MDF 3 Hộc Kéo Tatana MDF055 có thiết kế hiện đại, sang trọng, góp phần mang đến một không gian sống hoàn toàn khác biệt cho ngôi nhà của bạn. Giường ngủ mini với phần đầu giường thấp nhưng 1 bên thành giường cao, đặc biệt thiết thực với những gia đình có con nhỏ, giúp các bé không bị lăn ngã xuống giường trong khi ngủ. Ba mẹ có thể tập cho con ngủ độc lập trên chiếc giường này, bé sẽ rất thích luôn ạ.', '1-bfe4b656-802c-4987-a029-5e7b108a4364.webp', 10000, 0, '2022-11-22 12:20:15', '2024-09-02 02:48:30', 1, 1, 1, 0),
(1018, 12, 1, 'Ghế Sofa MOHO LYNGBY 601', 'ghe-sofa-moho-lyngby-601', '', '', 'product-1.png', 12, 9, '2024-09-03 01:25:50', '2024-09-03 01:33:24', 1, 1, 1, 0),
(1019, 11, 2, 'Ghế Sofa MOHO HALDEN 801', 'ghe-sofa-moho-halden-801', '', '', 'product-2.png', 21, 0, '2024-09-03 01:26:16', '2024-09-03 01:33:07', 1, 1, 1, 0),
(1020, 12, 1, 'Ghế Ăn Gỗ Cao Su Tự Nhiên', 'ghe-an-go-cao-su-tu-nhien', '', '', 'product-3.png', 15, 0, '2024-09-03 01:27:32', '2024-09-03 02:16:59', 1, 1, 1, 0),
(1021, 11, 3, 'Ghe Sofa mem', 'ghe-sofa-mem', '1', '1', 'sofa.png', 10000, 0, '2024-09-03 04:57:05', '2024-09-03 04:57:31', 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_topic`
--

CREATE TABLE `db_topic` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sort_order` int UNSIGNED DEFAULT NULL,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2',
  `image` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_topic`
--

INSERT INTO `db_topic` (`id`, `name`, `slug`, `sort_order`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `image`) VALUES
(3, 'Tin tức', 'tin-tuc', 0, 'Mô tả tin tức', '2023-10-15 22:30:30', '2023-10-15 22:33:26', 1, NULL, 1, NULL),
(4, 'Dịch vụ', 'dich-vu', 0, 'Chủ đề dịch vụ', '2023-10-15 22:30:48', '2023-10-15 22:33:38', 1, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `db_user`
--

CREATE TABLE `db_user` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2',
  `repassword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_user`
--

INSERT INTO `db_user` (`id`, `name`, `username`, `password`, `gender`, `phone`, `email`, `image`, `address`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `repassword`) VALUES
(51, 'nguyen phat dat', 'fatdat', 'Dalrest2210@', '1', '0845553994', 'dat48421@gmail.com', 'person-1.png', '16 tang nhon phu', '2024-09-06 15:18:35', NULL, 1, NULL, 1, 'Dalrest2210@'),
(86, 'nguyen phat dat', 'dat', 'Dalrest2210@', '1', '0766811573', 'dalrest2210@gmail.com', 'person_2.jpg', 'ưqeq', '2024-09-03 04:55:02', NULL, 1, NULL, 2, 'Dalrest2210@');

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
-- Indexes for table `db_cart`
--
ALTER TABLE `db_cart`
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
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `db_brand`
--
ALTER TABLE `db_brand`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `db_cart`
--
ALTER TABLE `db_cart`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=231;

--
-- AUTO_INCREMENT for table `db_category`
--
ALTER TABLE `db_category`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `db_contact`
--
ALTER TABLE `db_contact`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `db_menu`
--
ALTER TABLE `db_menu`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=517;

--
-- AUTO_INCREMENT for table `db_order`
--
ALTER TABLE `db_order`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=157;

--
-- AUTO_INCREMENT for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `db_post`
--
ALTER TABLE `db_post`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `db_product`
--
ALTER TABLE `db_product`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1022;

--
-- AUTO_INCREMENT for table `db_topic`
--
ALTER TABLE `db_topic`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `db_user`
--
ALTER TABLE `db_user`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
