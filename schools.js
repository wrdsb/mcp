"use strict";

var the_school = {};
var the_staff_group = "";
var the_admin_group = "";
var the_public_calendar = "";
var the_staff_calendar = "";

// get all schools
// foreach schools as the_school:

the_school.should.have.a(staff_group);
  // assign group to the_staff_group
  the_staff_group.should.have.staff_group_settings;

the_school.should.have.an(admin_group);
  // assign group to the_admin_group
  the_admin_group.should.have.admin_group_settings;

the_school.should.have.a(public_calendar);
  // assign calendar to the_public_calendar
  the_public_calendar.should.be.shared_publicly;
  the_public_calendar.should.be.readable_by(the_staff_group);
  the_public_calendar.should.be.editable_by(the_admin_group);

the_school.should.have.a(staff_calendar);
  // assign calendar to the_staff_calendar
  the_staff_calendar.should.not.be.shared_publicly;
  the_staff_calendar.should.be.readable_by(the_staff_group);
  the_staff_calendar.should.be.editable_by(the_admin_group);
