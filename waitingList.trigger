trigger waitingList on SOBJECT (before insert) {
    trigger triggerOnWaitingList on Waiting_List__c (before insert) {
        if(trigger.isBefore){
            if(trigger.isInsert){
                triggerHelperClass.firstMethod(trigger.new);
               
            }
        }
    }
}