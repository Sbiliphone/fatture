-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 19, 2021 at 06:35 PM
-- Server version: 5.7.30
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `Fatture`
--

-- --------------------------------------------------------

--
-- Table structure for table `Azienda`
--

CREATE TABLE `Azienda` (
  `id` int(250) NOT NULL,
  `Name` varchar(250) NOT NULL,
  `Address` varchar(250) DEFAULT NULL,
  `CAP` int(250) DEFAULT NULL,
  `City` varchar(250) DEFAULT NULL,
  `State` varchar(250) DEFAULT NULL,
  `TelephoneNumber` int(250) DEFAULT NULL,
  `Email` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Azienda`
--

INSERT INTO `Azienda` (`id`, `Name`, `Address`, `CAP`, `City`, `State`, `TelephoneNumber`, `Email`) VALUES
(1, 'LiguCompany', 'Via Cividale 38', 33040, 'Cividale', 'Udine', 331276121, 'alessandro.ligugnana@gmail.com'),
(2, 'Apple', 'Via Copertino 12', 75022, 'Copertino', 'Lecce', 345127892, 'apple@apple.com'),
(3, 'Finestre', 'Via Don Bosco 8', 33010, 'Udine', 'Udine', 342522012, 'finestra@finestra.org'),
(4, 'Bearzi', 'Via Don Bosco 15', 3310, 'Udine', 'Udine', 343252189, 'bearzi@bearzi.it'),
(5, 'Punte Company', 'Via Puntel 88', 33333, 'Chiavris', 'Udine', 333345261, 'puntel@superleague.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Azienda`
--
ALTER TABLE `Azienda`
  ADD PRIMARY KEY (`id`);
