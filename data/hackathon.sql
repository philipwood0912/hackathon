-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 08, 2019 at 06:47 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hackathon`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contact`
--

CREATE TABLE `tbl_contact` (
  `ID` int(11) NOT NULL,
  `review_ID` int(11) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Phone` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_contact`
--

INSERT INTO `tbl_contact` (`ID`, `review_ID`, `Email`, `Phone`) VALUES
(1, 1, 'maryhadalittleham@gmail.com', '519-870-3453'),
(2, 2, 'youknownothing@hotmail.com', '519-902-9003'),
(3, 3, 'ouuyathathot@yahoo.com', '618-550-1134'),
(4, 4, 'janedoe69@gmail.com', '819-092-3387');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_reviews`
--

CREATE TABLE `tbl_reviews` (
  `ID` int(11) NOT NULL,
  `Name` varchar(40) NOT NULL,
  `Rating` varchar(5) NOT NULL,
  `Text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_reviews`
--

INSERT INTO `tbl_reviews` (`ID`, `Name`, `Rating`, `Text`) VALUES
(1, 'Mary Ham', '4.5', '\"It\'s incredible. HouseCom ThermoSecurity System should be nominated for service of the year.\"'),
(2, 'Jon Snow', '4.2', '\"It\'s exactly what I\'ve been looking for. You won\'t regret it.\"'),
(3, 'Will Smith', '4.9', '\"Ah, that\'s hot! or cold. It\'s rewind time!\"'),
(4, 'Jane Doe', '4.1', '\"Wow what great service, I love it!\"');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_test`
--

CREATE TABLE `tbl_test` (
  `ID` int(11) NOT NULL,
  `Text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_test`
--

INSERT INTO `tbl_test` (`ID`, `Text`) VALUES
(1, 'A worm studies the wetting protest. The maker chains a bobs movie. Behind the horde hurts the advantageous freeway. The outdated dress towers. A heaviest alias deeds a supplementary motorway.'),
(2, 'The export opens the pathetic ceremony. The unreliable floppy conforms outside the daft lung. A mumble cries behind an agenda. How can a cult sort the seed? A space rolls!'),
(3, '\r\nA bowl excludes the narrative. An existence mucks the puzzling name. When will a vanishing universe decide into a tourist? A pencil rots the quota outside the extant honey. The mayor chalks over a bell! The sod charges the standard theater behind the turnround.'),
(4, 'The restored vicar combats the terrible signature. The untrue homosexual aces a soundtrack. Within the blame twists her thin royal. A rainbow scores across a reassured lifestyle.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_reviews`
--
ALTER TABLE `tbl_reviews`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_test`
--
ALTER TABLE `tbl_test`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_reviews`
--
ALTER TABLE `tbl_reviews`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_test`
--
ALTER TABLE `tbl_test`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
