# powerknot
PowerDNS-esque API for Knot DNS Servers, allowing you to integrate with any third-party that supports PowerDNS.

## Why?

Knot DNS is a widely used DNS server chosen for its simplicity and performance. That being said, many systems are designed to integrate with PowerDNS and its API, pushing operators to chose between sacrificing the benfits of Knot or working without the integration.

This project aims to provide a drop-in replacement to the PowerDNS API that allows you to integrate with any third-party that supports PowerDNS, whilst maintaining Knot as the backend DNS server.

## Endpoints 
The endpoints that PowerDNS implements, and we therefore need to copy, are:

| Method | Endpoint | Description |
| --- | --- | --- |
| ***Servers*** |
| GET | /servers | List of servers |
| GET | /servers/{server_id} | Server details |
| ***Zones*** |
| GET | /servers/{server_id}/zones | List of zones |
| POST | /servers/{server_id}/zones| Create a zone |
| GET | /servers/{server_id}/zones/{zone_id} | Zone details |
| DELETE | /servers/{server_id}/zones/{zone_id} | Delete a zone |
| PATCH | /servers/{server_id}/zones/{zone_id} | Update RRSets |
| PUT | /servers/{server_id}/zones/{zone_id} | Update a zone |
| PUT | /servers/{server_id}/zones/{zone_id}/axfr-retrieve | Retrieve AXFR from master |
| PUT | /servers/{server_id}/zones/{zone_id}/notify | Notify slaves |
| GET | /servers/{server_id}/zones/{zone_id}/export | Export zone in AXFR format |
| PUT | /servers/{server_id}/zones/{zone_id}/rectify | Rectify zone data |
| ***Views*** |
| GET | /servers/{server_id}/views | List of views |
| GET | /servers/{server_id}/views/{view_id} | View details |
| POST | /servers/{server_id}/views/{view_id} | Create a view |
| DELETE | /servers/{server_id}/views/{view_id} | Delete a view |
| ***Networks*** |
| GET | /servers/{server_id}/networks | List of networks and views |
| GET | /servers/{server_id}/networks/{ip}/{prefix} | Return network view |
| PUT | /servers/{server_id}/networks/{ip}/{prefix} | Sets network view |
| ***Cryptokeys*** |
| GET | /servers/{server_id}/zones/{zone_id}/cryptokeys | List of cryptokeys |
| POST | /servers/{server_id}/zones/{zone_id}/cryptokeys | Create a cryptokey |
| GET | /servers/{server_id}/zones/{zone_id}/cryptokeys/{cryptokey_id} | Cryptokey details |
| PUT | /servers/{server_id}/zones/{zone_id}/cryptokeys/{cryptokey_id} | Deactivate cryptokey |
| DELETE | /servers/{server_id}/zones/{zone_id}/cryptokeys/{cryptokey_id} | Delete a cryptokey |
| ***Metadata*** |
| GET | /servers/{server_id}/zones/{zone_id}/metadata | Get all the metadata of a zone |
| POST | /servers/{server_id}/zones/{zone_id}/metadata | Creates a set of metadata |
| GET | /servers/{server_id}/zones/{zone_id}/metadata/{metadata_kind} | Get a specific metadata kind from a zone |
| PUT | /servers/{server_id}/zones/{zone_id}/metadata/{metadata_kind} | Update a specific metadata kind from a zone |
| DELETE | /servers/{server_id}/zones/{zone_id}/metadata/{metadata_kind} | Delete a specific metadata kind from a zone |
| ***TSIGKeys*** |
| GET | /servers/{server_id}/tsigkeys | List of tsigkeys |
| POST | /servers/{server_id}/tsigkeys | Create a tsigkey |
| GET | /servers/{server_id}/tsigkeys/{tsigkey_id} | Get a tsigkey |
| PUT | /servers/{server_id}/tsigkeys/{tsigkey_id} | Update a tsigkey |
| DELETE | /servers/{server_id}/tsigkeys/{tsigkey_id} | Delete a tsigkey |
| ***Autoprimaries*** |
| GET | /servers/{server_id}/autoprimaries | List of autoprimaries |
| POST | /servers/{server_id}/autoprimaries | Create an autoprimary |
| DELETE | /servers/{server_id}/autoprimaries/{ip}/{nameserver} | Delete an autoprimary |
| ***Searching*** |
| GET | /servers/{server_id}/search-data | Search the data inside Knot DNS |

### Unsupported Endpoints

We have no plans to implement the **Statistics** endpoint, along with the **Cache** endpoint, as both are not essential and outside of the scope of this project.