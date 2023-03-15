# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

# (My Ticket Breakdown STARTS HERE)

# Ticket 1: Add a custom ID field to Agents table

## Acceptance criteria:

A new column custom\_id should be added to the Agents table.

## Time/effort estimate:

1-2 hours

## Implementation Description:

(Assuming we're using code first approach)

- Add a new field to the custom\_id to the Agents table in the Agents model.
- Run the migration to update the database according to the model change.
- Test it by adding the new customer either through UI or running API.

# Ticket 2: Add validation rules for custom ID field

## Acceptance criteria:

- The Custom\_Id should be unique per Facility.
- Custom\_Id must not exceed a certain length (50 characters).

## Time/effort estimate:

30 minutes to 1 hours

## Implementation details:

- Add validation rules to ensure the custom\_id is unique per facility and do not exceed a certain length
- Add this validation rule at the model file of the agents (assuming we're using ORM like Mongoose/Sequelize).
- Run the migration to update the database according to the model change.
- Test it by adding the new customer either through UI or running API.

# Ticket 3: Update report code to use custom ID instead of internal ID

## Acceptance criteria:

- Reports being generated for Facilities should use custom\_id field instead of the internal id field.
- The report query to join the Shifts and Agents tables should be using the custom\_id and agent\_custom\_id fields.

## Time/effort estimate:

1-2 hours

## Implementation Description:

- Update the report query to use the custom\_id field instead of the internal id field.
- Update all the Join Query code between the Shifts and Agents tables that is currently using db generated id should now be using the custom\_id
- Test it by adding the new customer either through UI or running API.
