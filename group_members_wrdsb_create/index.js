module.exports = function (context, message) {
    context.log(message);

    var igor_queue = 'members_to_create';

    var email_address = '';
    var job_code = '';

    var included_job_codes = [];
    var excluded_job_codes = ['6106', '6118'];

    var wrdsb_groups = [
        "all-staff@wrdsb.ca",
        "bereavements@wrdsb.ca",
        "retirements@wrdsb.ca",
        "severe-weather@wrdsb.ca",
        "staff-opportunities@wrdsb.ca",
    ];

    if (!excluded_job_codes.includes(job_code)) {
        wrdsb_groups.forEach(function (groupKey) {
            var member = {
                email:          email_address,
                role:           "MEMBER",
                status:         "ACTIVE",
                type:           "USER",
                groupKey:       groupKey
            };

            var message = {
                body: JSON.stringify(member)
            }

            serviceBusService.sendTopicMessage(igor_queue, message, function(error) {
                if (error) {
                    context.error(error);
                }
            });
        });
    }
    context.done();
};
