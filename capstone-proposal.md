### Name of Student:

_Jonathan Cheng_

### Name of Project:

_Science Laboratory Inventory Tracker_

### Project's Purpose or Goal:

_An inventory tracking system for a small school science laboratory. An admin account is able to CRUD inventory items -- including category tags. A non-admin account can only "check out" items much like a library's inventory tracking system. (Detailed description below.)_

#### List the absolute minimum features the project requires to meet this purpose or goal:

- _Add items to database._
- _Items searchable by keywords (properties of items)_
- _CRUD functionality_
- _Authentication (ideally with Google)_
- _Roles: division of CRUD vs. R access_

#### What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.

- _HTML / CSS / BootStrap? (some kind of styling)_
- _JavaScript_
- _React with TypeScript (adds structure on top of JavaScript)_
- _Vite.js (sets up React project in place of Create React App)_
- _Firebase (use for authentication via Google logins)_
- _Firestore (noSQL database)_

#### If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.

- _Tags / Properties - allow users to drag and drop tags onto existing items_
  - Assuming my approach for creating items (at this point, probably forms) cannot encompass all possible properties
  - Ex: expiration/best by date, purchase date, state of repair / disrepair, warning labels
- _Users can "tag" items that should be automatically ordered/replenished upon low supply counts_
  - script that emails a certain person with item order details?
- _Non-admin accounts can "suggest" edits to an item entry._
  - Admin accounts can resolve to take suggestion or deny it.
- _Responsive Design: Optimize functionality on different devices (iPad, tablets, mobile)_
  - Phone app (in addition to website)
- _Pagination of results (Will this be applicable to Firebase without a web API?)_
  - Photos - attached to items (not sure how this will affect bandwidth from free hosting services)
- _UI improvement_
  - Design for user quality of life
  - Using other kinds of styling tools
- _Unit testing_

#### What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?

- _React Native_
- _Tailwind CSS_
- _Three.js_

#### Is there anything else you'd like your instructor to know?

My goal is to create this app for my former workplace – a school of K-12, with about 30 teachers, and roughly 300 students. I'd like to keep it up and running 24/7 so that it can serve as a library-like inventory tracking application, keeping track of items in the lab.

The users (at this point, only teachers) can utilize it to keep track of science lab equipment / supplies. Initially, items would need to be added to the database. Items are various in nature so for my MVP, I'd keep the available properties simple (ex: Item name, total quantity, available quantity, location, checked out by).

I'd like it to have check-in / check-out functionality, where a user can search for an item, let's say "slinkies". As per intended use, the user would sign in to their account and note the fact that they borrowed 5 of the 10 available slinkies. These 5 slinkies would be attached to their account.

There would be a division between Admin accounts, and Standard accounts. All accounts will be able to search for an item by properties / key words and then check-out / check-in the items. Admin accounts will have ability to create, read, update, delete (CRUD) the items in the inventory, while Standard accounts will be limited to read (R) the items.

At the time of this proposal, I'm planning on using a NoSQL database (FireStore) since the types of items that can be found in the laboratory vary widely in properties. For instance, some items can be "countable" (i.e. we have 10 slinkies, or five 500 ml beakers), but in other cases, the units of counting would be less clear (i.e. two bottles of 2 liter vinegar). Example items:

- _consumable items:_
  - baking soda, vinegar, food coloring, laboratory chemicals, straws, aluminum foil, wax paper, litmus strips, sand paper, soil, sand, etc.
- _permanent equipment:_
  - microscopes, bunsen burners, glassware: ~20 varieties of sizes / shapes, test-tubes, slinkies, marbles, washers, wind-up toys, toy cars, ramps, Sun - Moon - Earth model, tweezers, scales, laboratory goggles, skeleton model, meter sticks, flash lights, mirrors, colored lenses, etc.
- _potentially fit into both categories(?) items:_
  - microscope slides, investigation kits - parts can run out when used, plastic pipettes, popsicle sticks, etc.

Regardless, this is my main reason for wanting to try a NoSQL database. From my research so far, it seems to be that it is easier to add additional properties to a NoSQL database, compared to a SQL database, where everything should be clearly defined from the beginning.

Later, students will be able to use the site – also via Google Authentication. They will be a Student account.

React Native: I'd like to be able to allow users to have a mobile friendly way to access this system.
