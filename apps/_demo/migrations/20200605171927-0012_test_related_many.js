// auto generated by kmigrator
// KMIGRATOR:0012_test_related_many:IyBHZW5lcmF0ZWQgYnkgRGphbmdvIDMuMC42IG9uIDIwMjAtMDYtMDUgMTI6MTkKCmZyb20gZGphbmdvLmRiIGltcG9ydCBtaWdyYXRpb25zLCBtb2RlbHMKaW1wb3J0IGRqYW5nby5kYi5tb2RlbHMuZGVsZXRpb24KCgpjbGFzcyBNaWdyYXRpb24obWlncmF0aW9ucy5NaWdyYXRpb24pOgoKICAgIGRlcGVuZGVuY2llcyA9IFsKICAgICAgICAoJ19kamFuZ29fc2NoZW1hJywgJzAwMTFfYXV0b18yMDIwMDYwNF8yMDIxJyksCiAgICBdCgogICAgb3BlcmF0aW9ucyA9IFsKICAgICAgICBtaWdyYXRpb25zLkNyZWF0ZU1vZGVsKAogICAgICAgICAgICBuYW1lPSd0ZXN0X3JlbGF0ZWRfbWFueScsCiAgICAgICAgICAgIGZpZWxkcz1bCiAgICAgICAgICAgICAgICAoJ2lkJywgbW9kZWxzLkF1dG9GaWVsZChhdXRvX2NyZWF0ZWQ9VHJ1ZSwgcHJpbWFyeV9rZXk9VHJ1ZSwgc2VyaWFsaXplPUZhbHNlLCB2ZXJib3NlX25hbWU9J0lEJykpLAogICAgICAgICAgICAgICAgKCdUZXN0X2xlZnRfaWQnLCBtb2RlbHMuRm9yZWlnbktleShkYl9jb2x1bW49J1Rlc3RfbGVmdF9pZCcsIG9uX2RlbGV0ZT1kamFuZ28uZGIubW9kZWxzLmRlbGV0aW9uLkNBU0NBREUsIHJlbGF0ZWRfbmFtZT0nKycsIHRvPSdfZGphbmdvX3NjaGVtYS50ZXN0JykpLAogICAgICAgICAgICAgICAgKCdUZXN0X3JpZ2h0X2lkJywgbW9kZWxzLkZvcmVpZ25LZXkoZGJfY29sdW1uPSdUZXN0X3JpZ2h0X2lkJywgb25fZGVsZXRlPWRqYW5nby5kYi5tb2RlbHMuZGVsZXRpb24uQ0FTQ0FERSwgcmVsYXRlZF9uYW1lPScrJywgdG89J19kamFuZ29fc2NoZW1hLnRlc3QnKSksCiAgICAgICAgICAgIF0sCiAgICAgICAgICAgIG9wdGlvbnM9ewogICAgICAgICAgICAgICAgJ2RiX3RhYmxlJzogJ1Rlc3RfcmVsYXRlZF9tYW55JywKICAgICAgICAgICAgfSwKICAgICAgICApLAogICAgXQo=

exports.up = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Create model test_related_many
--
CREATE TABLE "Test_related_many" ("id" serial NOT NULL PRIMARY KEY, "Test_left_id" integer NOT NULL, "Test_right_id" integer NOT NULL);
ALTER TABLE "Test_related_many" ADD CONSTRAINT "Test_related_many_Test_left_id_3ffb833f_fk_Test_id" FOREIGN KEY ("Test_left_id") REFERENCES "Test" ("id") DEFERRABLE INITIALLY DEFERRED;
ALTER TABLE "Test_related_many" ADD CONSTRAINT "Test_related_many_Test_right_id_fa79fd5e_fk_Test_id" FOREIGN KEY ("Test_right_id") REFERENCES "Test" ("id") DEFERRABLE INITIALLY DEFERRED;
CREATE INDEX "Test_related_many_Test_left_id_3ffb833f" ON "Test_related_many" ("Test_left_id");
CREATE INDEX "Test_related_many_Test_right_id_fa79fd5e" ON "Test_related_many" ("Test_right_id");
COMMIT;

    `)
}

exports.down = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Create model test_related_many
--
DROP TABLE "Test_related_many" CASCADE;
COMMIT;

    `)
}
