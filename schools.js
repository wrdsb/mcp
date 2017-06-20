"use strict";

var staff_group = {};
var admin_group = {};
var office_group = {};
var attendance_group = {};
var vendors_group = {};
var s4s_group = {};
var public_calendar = {};
var staff_calendar = {};

var the_school = {};
var the_staff_group = "";
var the_admin_group = "";
var the_office_group = "";
var the_attendance_group = "";
var the_vendors_group = "";
var the_s4s_group = "";
var the_public_calendar = "";
var the_staff_calendar = "";

// get all schools from codex
// foreach schools as the_school:

the_school.should.have.property('id').which.is.not.empty;
the_school.should.have.property('full_name').which.is.not.empty;
the_school.should.have.property('abbreviated_name').which.is.not.empty;
the_school.should.have.property('street_address').which.is.not.empty;
the_school.should.have.property('city').which.is.not.empty;
the_school.should.have.property('province').which.is.not.empty;
the_school.should.have.property('postal_code').which.is.not.empty;
the_school.should.have.property('phone').which.is.not.empty;
the_school.should.have.property('fax').which.is.not.empty;
the_school.should.have.property('website').which.is.not.empty;
the_school.should.have.property('alpha_code').which.is.not.empty;
the_school.should.have.property('school_type_code').which.is.not.empty;
the_school.should.have.property('mident').which.is.not.empty;
the_school.should.have.property('principal').which.is.not.empty;
the_school.should.have.property('vice_principals').which.is.an(Array);

the_school.should.have.property('staff_group').which.is.not.empty;
  // assign group to the_staff_group

the_school.should.have.property('admin_group').which.is.not.empty;
  // assign group to the_admin_group

the_school.should.have.property('office_group').which.is.not.empty;
  // assign group to the_office_group

the_school.should.have.property('attendance_group').which.is.not.empty;
  // assign group to the_attendance_group

the_school.should.have.property('vendors_group').which.is.not.empty;
  // assign group to the_vendors_group

the_school.should.have.property('s4s_group').which.is.not.empty;
  // assign group to the_s4s_group

the_school.should.have.property('staff_calendar_id').which.is.not.empty;
// assign calendar to the_staff_calendar

the_school.should.have.property('public_calendar_id').which.is.not.empty;
// assign calendar to the_public_calendar

the_staff_group.should.exist_in_g_suite;
  the_staff_group.should.have_staff_group_settings;

the_admin_group.should.exist_in_g_suite;
  the_admin_group.should.have_admin_group_settings;

the_office_group.should.exist_in_g_suite;
  the_office_group.should.have_office_group_settings;

the_attendance_group.should.exist_in_g_suite;
  the_attendance_group.should.have_attendance_group_settings;

the_vendors_group.should.exist_in_g_suite;
  the_vendors_group.should.have_vendors_group_settings;

the_s4s_group.should.exist_in_g_suite;
  the_s4s_group.should.have_s4s_group_settings;

the_public_calendar.should.exist_in_g_suite;
  the_public_calendar.should.be.shared_publicly;
  the_public_calendar.should.be.readable_by(the_staff_group);
  the_public_calendar.should.be.editable_by(the_admin_group);

the_staff_calendar.should.exist_in_g_suite;
  the_staff_calendar.should.not.be.shared_publicly;
  the_staff_calendar.should.be.readable_by(the_staff_group);
  the_staff_calendar.should.be.editable_by(the_admin_group);
