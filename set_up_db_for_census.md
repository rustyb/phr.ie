ogr2ogr -f "PostgreSQL" -overwrite -lco ENCODING="UTF-8" PG:"dbname=phr user=colinbroderick" "Census2011_Electoral_Divisions_generalised20m.shp" -s_srs EPSG:29902 -t_srs EPSG:3857 -nln cso_eds -lco GEOMETRY_NAME=geom -nlt GEOMETRY


ogr2ogr -f 'GeoJSON' -overwrite -lco ENCODING="UTF-8" -s_srs EPSG:29902 -t_srs EPSG:3857 c11_eds.geojson "Census2011_Electoral_Divisions_generalised20m.shp"