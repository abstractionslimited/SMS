function Schedule(
  subject: string,
  teacher: string,
  room: string
  // startTime: string,
  // endTime: string
) {
  this.id = Math.random().toString(36).substr(2, 9);
  // this.startTime = startTime;
  // this.endTime = endTime;
  this.subject = subject;
  this.teacher = teacher;
  this.room = room;
}
export default Schedule;
