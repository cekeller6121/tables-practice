#!/usr/bin/perl

use DBI;
use strict;

my $driver = "SQLite";
my $database = "test.db";
my $dsn = "DBI:$driver:dbname=$database";
my $userid = "";
my $password = "";
my $dbh = DBI->connect($dsn, $userid, $password, { RaiseError => 1 })
   or die $DBI::errstr;
print "Opened database successfully\n";

my $stmt = qq(SELECT id, firstname, lastname, home from NAMES;);
my $sth = $dbh->prepare( $stmt );
my $rv = $sth->execute() or die $DBI::errstr;

if($rv < 0) {
   print $DBI::errstr;
}

while(my @row = $sth->fetchrow_array()) {
      print "First Name: ". $row[1] . "\n";
      print "Last Name: ". $row[2] ."\n";
      print "Home: ". $row[3] ."\n";
}
print "Operation done successfully\n";
$dbh->disconnect();
