---
layout: page
title: Data Dictionary
no_nav: true 
---

The list below can be used as the data dictionary for the monthly exports as provided by PHR.

1. [agg-grid-and-planning.csv](#agg-grid-and-planningcsv)
2. [solar-apps.csv](#solar-appscsv)
3. [grid-connections.csv](#grid-connectionscsv)

## agg-grid-and-planning.csv

|Field|Type|Description|Example|
|---|---|---|---|
grid_id|UID|Grid id as per connection list|
grid_status|String|Status per connection list|
contact|String|Contact per connection list|
grid_mec|Number|Maximum export capacity per connection list|
project_name|String|Project name per connection list|
grid_recieved|Date|per connection list|
grid_location|String|per connection list|
grid_station|String|per connection list|
grid_ig_coords|String|Irish Grid coordinates as per connection list|
grid_latitude|Number|Grid connection latitude (WGS84)|
grid_longitude|Number|Grid connection latitude (WGS84)|
planning_ref|String|Planning application reference per local authority|
planning_decision|String|Decision of the planning authority|
planning_recieved|String|Date planning application recieved by local authority|
la|String|Local authority, can differ from grid connection location|
development_address|String|Address from local authority|
planning_applicant|String|Planning application applicant|
planning_latitude|Number|latitude (WGS84)|
planning_longitude|Number|latitude (WGS84)|
site_area|Number|Site area from planning application file|
capacity|Number|Export capacity as indicated in planning application documents|
phr_uid|UID String|Unique ID field used by PHR for each planning application, useful for joining to solar-apps.csv|
updated_at|Date|Last update of the records|
{:class="table"}

## solar-apps.csv

|Field|Type|Description|Example|
|---|---|---|---|
uid|uid|Unique ID field used by PHR for each planning application, useful for joining to grid-connections.csv & agg-grid-and-planning.csv|
la|String|Local authority in which planning application was filed|
file_num|String|Planning application reference per local authority|
url|String|Link to planning application on local authority website|
dev_desc|String|Development desciption as published on local authority website|
address|String|Address from local authority|
app_name|String|Planning application applicant|
received|Date|Date planning application recieved by local authority|
decision_date|Date|Date decision of decision according to local authority file|
decision_due|Date|Date decision due according to local authority file|
decision|String|Current planning authority decision|
site_area|Number|Site area from planning application file|
capacity|Number|Export capacity as indicated in planning application documents|
abp_ref|String|An Bord Pleanala reference of appeal
latitude|Number|latitude (WGS84)|
longitude|Number|latitude (WGS84)|
last_updated|Date|Last update of the record|
grid_id|UID String|Unique ID field of grid connection application, useful for joing with grid-connections.csv
{:class="table"}

## grid-connections.csv

|Field|Type|Description|Example|
|---|---|---|---|
grid_id|UID|Grid id as per connection list|
project_name|String|Status per connection list|
contact|String|Contact per connection list|
recieved|Date|per connection list|
grid_status|String|Status per connection list|
location|String|per connection list|
ig_coords|String|Irish Grid coordinates as per connection list|
grid_mec|Number|Maximum export capacity per connection list|
substation|String|per connection list|
type|String|Type of generator (Solar/Wind/CCGT/etc)|
longitude|Number|longitude (WGS84)|
latitude|Number|latitude (WGS84)|
app_uid|UID String|Unique ID of the matched planning application.Useful for joing with solar-apps.csv
updated_at|Date|Date record last updated|
{:class="table"}