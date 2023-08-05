let questionsGroups = [
    {
      "questions": ["what species are available?"],
      "intent": "organisms.geneExpression",
    },
    {
      "questions": ["what organisms are available?"],
      "intent": "organisms.geneExpression",
    },
    {
      "questions": ["what cell types are available?", "in mouse", "lung"],
      "intent": "celltypes.geneExpression"
    },
    { "questions": ["what are the markers for fibroblast in mouse lung", "5"],
      "intent": "markers.geneExpression"
    },
    {
      "questions": ["what is the expression of Col1a1 in mouse heart"],
      "intent": "average.geneExpression"
    },
    {
      "questions": ["what is the expression of Col1a1?", "in mouse", "in heart"],
      "intent": "average.geneExpression",
    },
    {
      "questions": ["what are the 10 marker genes for fibroblast in murine lung?"],
      "intent": "markers.geneExpression",
    },
    {
      "questions": ["who expresses Col1a1 in mouse?"],
      "intent": "highest_measurement.geneExpression",
    },
    {
      "questions": ["who expresses Col1a1 the most?", "in mouse"],
      "intent": "highest_measurement.geneExpression"},
    {
      "questions": ["show genes similar to Pecam1", "10", "in mouse lung"],
      "intent": "similar_features.geneExpression"},
    {
      "questions": ["show cell types like fibroblast", "in mouse", "10", "Col1a1,Col6a2"],
      "intent": "similar_celltypes.geneExpression"},
    {
      "questions": ["make dotplot of Col1a1,Ptprc in mouse lung"],
      "intent": "fraction_detected.geneExpression"},
    {
      "questions": ["show the presence matrix of cell types in human"],
      "intent": "celltypexorgan.geneExpression"},
    {
      "questions": 'Hello there', "intent": "greetings.hello"},
    {
      "questions": "What organisms are available in AtlasApprox?",
      "intent": "organisms.geneExpression"},
    {
      "questions": "List cell types in microcebus myoxinus pancreas",
      "intent": "celltypes.geneExpression"},
    {
      "questions": "What is the average expression of ALK,CD8A,CD19 in human lung?",
      "intent": "average.geneExpression"},
    {
      "questions": ["Show the marker genes for coronary in human heart.", "3"],
      "intent": "markers.geneExpression"},
    {
      "questions": "Show 10 marker genes for coronary in human heart.",
      "intent": "markers.geneExpression"},
    {
      "questions": "What is the fraction of IL6,TNF,APOE,COL1A1,ALK,CD8A,CD19,TP53 in human lung?",
      "intent": "fraction_detected.geneExpression"},
    {
      "questions": "what cell type is the highest expressor of ALK in human?",
      "intent": "highest_measurement.geneExpression"},
    {
      "questions": "what cell types are present in each organ of mouse?",
      "intent": "celltypexorgan.geneExpression"},
    {
      "questions": "what are 10 genes similar to COL1A1 in human lung?",
      "intent": "similar_features.geneExpression"},
    {
      "questions": ["what are 10 cell types similar to fibroblast in human?", "heart", "Col1a1,Col2a1"],
      "intent": "similar_celltypes.geneExpression"},
    {
      "questions": "what kind of data is available?",
      "intent": "measurement_types"},
    {
      "questions": "what measurement kinds are there?",
      "intent": "measurement_types"},
    {
      "questions": ["what are 10 cell types with similar chromatin peaks to fibroblast in human?", "lung"],
      "intent": "similar_celltypes.chromatinAccessibility"},
    {
      "questions": "what ATAC-Seq cell types are there in human lung?",
      "intent": "celltypes.chromatinAccessibility"},
    {
      "questions": ["what are the marker peaks for fibroblast in human lung?", "3"],
      "intent": "markers.chromatinAccessibility"},
    {
      "questions": "where are fibroblast in human?",
      "intent": "celltype_location.geneExpression"},
    {
      "questions": "What is the average expression of ALK,CD8A,CD19 across organs in human fibroblast?",
      "intent": "average.geneExpression.across_organs"},
    {
      "questions": "What is the fraction of cells expressing ALK,CD8A,CD19 across organs in human fibroblast?",
      "intent": "fraction_detected.geneExpression.across_organs"},
    {
      "questions": ["what cell type is similar to lung fibroblast in human?", "Col1a1,Col2a1"],
      "intent": "similar_celltypes.geneExpression"},
    {
      "questions": ["show 8 cell types like Uterus pericyte in human", "COL1A1,COL2A1"],
      "intent": "similar_celltypes.geneExpression"},
    {
      "questions": ["show 10 similar genes to COL1A1 in human lung"],
      "intent": "similar_features.geneExpression"},
    {
      "questions": ["show 5 cell types like Lung fibroblast in mouse", "Ptprc,Gzma,Col1a1,Col2a1,Col6a2"],
      "intent": "similar_celltypes.geneExpression"},
  ];

module.exports = {
  questionsGroups,
}