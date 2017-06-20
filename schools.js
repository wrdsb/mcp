// get all schools
// foreach schools as a_school:

a_school.should.have.a(staff_group);
a_school.should.have.an(admin_group);

a_school.should.have.a(public_calendar);
  the_public_calendar.should.be.shared_publicly;
  the_public_calendar.should.be.readable_by(the_staff_group);
  the_public_calendar.should.be.editable_by(the_admin_group);

a_school.should.have.a(staff_calendar);
  the_staff_calendar.should.not.be.shared_publicly;
  the_staff_calendar.should.be.readable_by(the_staff_group);
  the staff_calendar.should.be.editable_by(the_admin_group);
