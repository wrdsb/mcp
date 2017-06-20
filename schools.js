// get all schools
// foreach schools as the_school:

the_school.should.have.a(staff_group);
the_school.should.have.an(admin_group);

the_school.should.have.a(public_calendar);
  // assign calendar to the_public_calendar
  the_public_calendar.should.be.shared_publicly;
  the_public_calendar.should.be.readable_by(the_staff_group);
  the_public_calendar.should.be.editable_by(the_admin_group);

the_school.should.have.a(staff_calendar);
  // assign calendar to the_staff_calendar
  the_staff_calendar.should.not.be.shared_publicly;
  the_staff_calendar.should.be.readable_by(the_staff_group);
  the staff_calendar.should.be.editable_by(the_admin_group);
