trigger seminarPerson on SOBJECT (before insert) {
    trigger triggerOnSeminarPerson on SeminarPerson__c (before insert) {
        if(trigger.isBefore){
            if(trigger.isInsert){
                triggerHelperClass.secondMethod(trigger.new);
               
            }
        }
    }
}