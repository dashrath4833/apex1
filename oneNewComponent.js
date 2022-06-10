import { LightningElement,api,track,wire} from 'lwc';
import getOpportunity from '@salesforce/apex/newClassApex.getOpportunity'
import getNotesAndAttachments from '@salesforce/apex/newClassApex.getNotesAndAttachments'
import uploadFile from '@salesforce/apex/newClassApex.uploadFile';
export default class OneNewComponent extends LightningElement {
    @track idz;
    @api recordId
    @api abc
    @track NotesArray=[]
    @wire(getOpportunity)
    retreiveOps;
    handleChange(event){
        this.idz=event.target.value;
        console.log(this.recordId)
    }
    @wire(getNotesAndAttachments)
    files;
    handleChange1(event){
        this.abc=event.target.value;
        console.log(abc)
    }


    
    fileData;
    openfileUpload(event){
        const file = event.target.files[0];
        var reader = new FileReader()
        reader.onload = () =>{
            var base64 = reader.result.split(',')[1];
            this.fileData = {
                'filename':file.name,
                'base64':base64,
                'recordId':this.recordId
            }
            console.log(this.fileData)
        }
        reader.readAsDataURL(file)
    }
    
    handleClick(){
        const {base64,filename,recordId}=this.fileData
        uploadFile({base64,filename,recordId}).then(result=>{
            this.fileData=null
            let title=`${filename} uploaded successful`
            console.log(title)
        })
    }
  

}
    
