// questions.js - All 50 questions with explanations
const QUESTION_BANK = [
  {
    id: "NN1-001",
    topic: "Machine learning definition",
    question: "Which statement best captures the standard experience-task-performance definition of machine learning?",
    options: {
      A: "A program learns if it stores more data than before.",
      B: "A program learns from experience E with respect to a task T and performance measure P if performance on T, measured by P, improves with E.",
      C: "A program learns if it can execute hand-written rules more quickly over time.",
      D: "A program learns if it can solve any task without examples or feedback."
    },
    correct: "B",
    explanation: "The definition explicitly relates experience, task, performance measure, and improvement."
  },
  {
    id: "NN1-002",
    topic: "Machine learning paradigm",
    question: "In the usual paradigm-shift description of machine learning, what replaces writing all rules by hand?",
    options: {
      A: "The system infers rules or model parameters from data and desired outputs.",
      B: "The system ignores the data and searches directly for labels.",
      C: "The programmer writes a larger rule base before training.",
      D: "The system chooses random rules and keeps them fixed."
    },
    correct: "A",
    explanation: "Examples and labels are used to infer rules or model parameters rather than manually coding all rules."
  },
  {
    id: "NN1-003",
    topic: "Supervised learning",
    question: "A model is trained on images together with their class labels. Which learning setting is this?",
    options: {
      A: "Unsupervised learning",
      B: "Supervised learning",
      C: "Reinforcement learning",
      D: "Out-of-core learning"
    },
    correct: "B",
    explanation: "Supervised learning uses inputs together with target labels."
  },
  {
    id: "NN1-004",
    topic: "Unsupervised learning",
    question: "Which task is most naturally treated as an unsupervised learning problem?",
    options: {
      A: "Predicting house prices from labeled examples",
      B: "Grouping customers into similar clusters without preassigned group labels",
      C: "Training an agent to maximize reward in a game",
      D: "Computing the exact derivative of a known polynomial"
    },
    correct: "B",
    explanation: "Clustering without given class labels is a standard unsupervised learning task."
  },
  {
    id: "NN1-005",
    topic: "Reinforcement learning",
    question: "What is the main objective of an agent in reinforcement learning?",
    options: {
      A: "To memorize all previously observed states",
      B: "To minimize the number of actions it can choose from",
      C: "To maximize expected cumulative reward through interaction with an environment",
      D: "To reproduce labels supplied for every state-action pair"
    },
    correct: "C",
    explanation: "An RL agent acts in an environment and aims to maximize expected cumulative reward."
  },
  {
    id: "NN1-006",
    topic: "Policy in reinforcement learning",
    question: "After successful reinforcement learning, what does the learned policy do?",
    options: {
      A: "It maps states to actions that are expected to be good for the task.",
      B: "It maps actions to random states for exploration only.",
      C: "It replaces the reward function with a classification loss.",
      D: "It stores the raw training images used by the agent."
    },
    correct: "A",
    explanation: "A policy prescribes which action to take in a given state."
  },
  {
    id: "NN1-007",
    topic: "Batch vs online learning",
    question: "Which description best characterizes online learning?",
    options: {
      A: "The model is trained once on the complete data set and then never updated.",
      B: "The model is updated incrementally as individual examples or mini-batches arrive.",
      C: "The model can only be trained when no internet connection is available.",
      D: "The model uses only unlabeled data and never uses targets."
    },
    correct: "B",
    explanation: "Online learning updates the model incrementally, often useful for streams or very large data."
  },
  {
    id: "NN1-008",
    topic: "Instance-based learning",
    question: "What is central to instance-based learning?",
    options: {
      A: "A similarity measure between new samples and stored examples",
      B: "A convolution kernel applied to every image",
      C: "A reward signal from an environment",
      D: "A validation set that is larger than the training set"
    },
    correct: "A",
    explanation: "Instance-based methods classify or predict by comparing new inputs to known instances."
  },
  {
    id: "NN1-009",
    topic: "Model-based learning",
    question: "In model-based learning, what is used for generalization to new data?",
    options: {
      A: "Only the closest stored training example",
      B: "A trained model with learned parameters",
      C: "A manually written list of all possible outputs",
      D: "The order in which the data was collected"
    },
    correct: "B",
    explanation: "Model-based learning fits a parameterized model and uses it to make predictions."
  },
  {
    id: "NN1-010",
    topic: "Data challenges",
    question: "Which of the following is a typical data-related challenge in machine learning?",
    options: {
      A: "The activation function is non-linear",
      B: "The data is not representative of the real problem distribution",
      C: "The gradient is computed by the chain rule",
      D: "The model has a bias parameter"
    },
    correct: "B",
    explanation: "Non-representative data and sampling bias are common data-related problems."
  },
  {
    id: "NN1-011",
    topic: "Overfitting",
    question: "A neural network performs very well on the training set but poorly on unseen data. What is the most likely problem?",
    options: {
      A: "Overfitting / high variance",
      B: "Underfitting / high bias",
      C: "The model has no parameters",
      D: "The problem must be unsupervised"
    },
    correct: "A",
    explanation: "Overfitting means the model fits training data too closely and generalizes poorly."
  },
  {
    id: "NN1-012",
    topic: "Underfitting",
    question: "A model performs poorly both on the training set and on the validation set. Which diagnosis is most plausible?",
    options: {
      A: "The model is probably too simple or lacks useful features.",
      B: "The model has memorized the training data perfectly.",
      C: "The test set has been used too late.",
      D: "The labels are unnecessary for supervised learning."
    },
    correct: "A",
    explanation: "Poor training and validation performance often indicates underfitting or high bias."
  },
  {
    id: "NN1-013",
    topic: "Accuracy on imbalanced data",
    question: "Why can accuracy be misleading for a highly imbalanced binary classification problem?",
    options: {
      A: "Accuracy cannot be computed for binary classification.",
      B: "A classifier that always predicts the majority class may achieve high accuracy while being useless for the minority class.",
      C: "Accuracy is always identical to recall.",
      D: "Accuracy requires a convolutional neural network."
    },
    correct: "B",
    explanation: "On skewed data, high accuracy may hide failure on the rare but important class."
  },
  {
    id: "NN1-014",
    topic: "Test set",
    question: "What is the main purpose of a separate test set?",
    options: {
      A: "To update the model weights after every epoch",
      B: "To tune hyperparameters until the best configuration is found",
      C: "To estimate final performance on data not used for training or model selection",
      D: "To replace the training set when there is little data"
    },
    correct: "C",
    explanation: "The test set should be held out for a final, unbiased performance estimate."
  },
  {
    id: "NN1-015",
    topic: "Validation set",
    question: "During model development, what is a validation set commonly used for?",
    options: {
      A: "Choosing hyperparameters or comparing model variants",
      B: "Defining the labels for the entire data set",
      C: "Replacing the loss function during backpropagation",
      D: "Guaranteeing that the model has no bias"
    },
    correct: "A",
    explanation: "Validation data is used during development to guide model and hyperparameter choices."
  },
  {
    id: "NN1-016",
    topic: "Categorical variables",
    question: "Why is one-hot encoding often preferred over integer encoding for nominal categories?",
    options: {
      A: "It forces an artificial order relation between categories.",
      B: "It avoids implying an ordinal relationship between unrelated categories.",
      C: "It removes the need for a training set.",
      D: "It makes every category numerically identical."
    },
    correct: "B",
    explanation: "One-hot encoding avoids suggesting artificial numerical order or distance between categories."
  },
  {
    id: "NN1-017",
    topic: "Missing values",
    question: "Which strategy is a common way to handle missing numerical values?",
    options: {
      A: "Replace missing entries with a suitable statistic such as the median, when appropriate.",
      B: "Always replace missing entries with the class label.",
      C: "Set the learning rate to zero.",
      D: "Convert all numerical features into image pixels."
    },
    correct: "A",
    explanation: "Imputation with mean, median, or another appropriate value is a common strategy."
  },
  {
    id: "NN1-018",
    topic: "Confusion matrix",
    question: "In a binary classifier, what is a false positive?",
    options: {
      A: "The model predicts positive, and the true class is negative.",
      B: "The model predicts negative, and the true class is positive.",
      C: "The model predicts positive, and the true class is positive.",
      D: "The model predicts negative, and the true class is negative."
    },
    correct: "A",
    explanation: "A false positive is a negative example incorrectly classified as positive."
  },
  {
    id: "NN1-019",
    topic: "Precision",
    question: "Which formula defines precision in binary classification?",
    options: {
      A: "TP / (TP + FN)",
      B: "TN / (TN + FP)",
      C: "TP / (TP + FP)",
      D: "(TP + TN) / (TP + TN + FP + FN)"
    },
    correct: "C",
    explanation: "Precision asks: among predicted positives, how many were truly positive?"
  },
  {
    id: "NN1-020",
    topic: "Recall",
    question: "Which formula defines recall in binary classification?",
    options: {
      A: "TP / (TP + FN)",
      B: "TP / (TP + FP)",
      C: "FP / (FP + TN)",
      D: "TN / (TN + FN)"
    },
    correct: "A",
    explanation: "Recall asks: among actual positives, how many were found?"
  },
  {
    id: "NN1-021",
    topic: "F1 score",
    question: "What does the F1 score combine?",
    options: {
      A: "Learning rate and batch size",
      B: "Precision and recall",
      C: "Training loss and number of layers",
      D: "True negatives and validation loss only"
    },
    correct: "B",
    explanation: "The F1 score is the harmonic mean of precision and recall."
  },
  {
    id: "NN1-022",
    topic: "Precision-recall tradeoff",
    question: "What usually happens when the decision threshold of a binary classifier is changed?",
    options: {
      A: "Precision and recall can change, often in opposite directions.",
      B: "The number of model parameters becomes zero.",
      C: "The training set is automatically enlarged.",
      D: "The classifier stops producing scores."
    },
    correct: "A",
    explanation: "Changing the threshold changes which samples are classified as positive, affecting precision and recall."
  },
  {
    id: "NN1-023",
    topic: "ROC and AUC",
    question: "What is plotted on a standard ROC curve?",
    options: {
      A: "Training loss versus number of hidden layers",
      B: "True positive rate versus false positive rate",
      C: "Precision versus number of epochs",
      D: "Learning rate versus batch size"
    },
    correct: "B",
    explanation: "The ROC curve plots true positive rate against false positive rate across thresholds."
  },
  {
    id: "NN1-024",
    topic: "Linear regression",
    question: "In simple linear regression with model \\(y_{\\mathrm{pred}} = \\alpha + \\beta x\\), what is learned from the data?",
    options: {
      A: "The input values \\(x\\) themselves",
      B: "The parameters alpha and beta",
      C: "The number of classes in a CNN",
      D: "The one-hot encoding of the labels"
    },
    correct: "B",
    explanation: "Linear regression fits the intercept and slope parameters to minimize a cost function."
  },
  {
    id: "NN1-025",
    topic: "Cost functions",
    question: "Why does minimizing mean squared error help fit a regression model?",
    options: {
      A: "It makes predictions close to target values according to a chosen error measure.",
      B: "It guarantees that every prediction is an integer class label.",
      C: "It removes all input features from the model.",
      D: "It prevents gradients from being computed."
    },
    correct: "A",
    explanation: "The MSE measures prediction error, so reducing it improves agreement between predictions and targets."
  },
  {
    id: "NN1-026",
    topic: "Sigmoid activation",
    question: "Which expression is the sigmoid activation function?",
    options: {
      A: "\\(g(z) = \\max(0, z)\\)",
      B: "\\(g(z) = 1 / (1 + \\exp(-z))\\)",
      C: "\\(g(z) = z^{-2}\\)",
      D: "\\(g(z) = \\exp(z) / z\\)"
    },
    correct: "B",
    explanation: "The sigmoid maps real numbers smoothly into the interval between 0 and 1."
  },
  {
    id: "NN1-027",
    topic: "XOR and nonlinearity",
    question: "Why can a single linear decision boundary not solve the XOR classification problem?",
    options: {
      A: "The XOR labels are not linearly separable in the original two-dimensional input space.",
      B: "XOR has only one input variable.",
      C: "XOR has no labels.",
      D: "Linear models cannot have bias terms."
    },
    correct: "A",
    explanation: "The positive and negative XOR examples cannot be separated by one straight line."
  },
  {
    id: "NN1-028",
    topic: "Activation functions",
    question: "Why are non-linear activation functions essential in multilayer neural networks?",
    options: {
      A: "Without non-linearities, a stack of linear layers is still only a linear function.",
      B: "They remove the need for a loss function.",
      C: "They make all gradients exactly zero.",
      D: "They guarantee perfect performance on all data sets."
    },
    correct: "A",
    explanation: "Compositions of linear functions remain linear, so non-linear activations provide expressive power."
  },
  {
    id: "NN1-029",
    topic: "Common activations",
    question: "Which list contains only common neural-network activation functions?",
    options: {
      A: "Sigmoid, tanh, ReLU, leaky ReLU",
      B: "Mean, median, variance, standard deviation",
      C: "Precision, recall, F1, AUC",
      D: "Train, validation, test, batch"
    },
    correct: "A",
    explanation: "Sigmoid, tanh, ReLU, and leaky ReLU are activation functions."
  },
  {
    id: "NN1-030",
    topic: "Neural network training",
    question: "Which sequence best describes one standard training iteration for a neural network?",
    options: {
      A: "Forward pass, compute loss, backpropagate gradients, update weights",
      B: "Update weights, erase labels, compute ROC, remove the loss",
      C: "Cluster data, one-hot encode the optimizer, freeze all parameters, stop",
      D: "Compute test accuracy, choose a new data set, delete gradients, increase bias manually"
    },
    correct: "A",
    explanation: "Training typically consists of prediction, loss evaluation, gradient computation, and parameter update."
  },
  {
    id: "NN1-031",
    topic: "Backpropagation",
    question: "Which mathematical rule is implemented by backpropagation?",
    options: {
      A: "The chain rule for derivatives",
      B: "Bayes rule only",
      C: "The triangle inequality",
      D: "The rule of three"
    },
    correct: "A",
    explanation: "Backpropagation efficiently applies the chain rule through nested computations."
  },
  {
    id: "NN1-032",
    topic: "Computational graphs",
    question: "Why do deep learning frameworks use computational graphs?",
    options: {
      A: "To represent operations and dependencies so that gradients can be computed automatically",
      B: "To remove all non-linear functions from the model",
      C: "To replace training data with diagrams",
      D: "To make all models unsupervised"
    },
    correct: "A",
    explanation: "Computational graphs track how tensors are produced, enabling automatic differentiation."
  },
  {
    id: "NN1-033",
    topic: "Learning rate",
    question: "What is the role of the learning rate in gradient descent?",
    options: {
      A: "It determines the step size of parameter updates.",
      B: "It determines the number of classes in the data.",
      C: "It is the same as the validation accuracy.",
      D: "It specifies the image width after convolution."
    },
    correct: "A",
    explanation: "The learning rate scales the update step along the negative gradient direction."
  },
  {
    id: "NN1-034",
    topic: "Learning rate problems",
    question: "What can happen if the learning rate is chosen much too large?",
    options: {
      A: "Training may overshoot minima and become unstable.",
      B: "The model must become linear.",
      C: "The data automatically becomes balanced.",
      D: "All missing values are imputed."
    },
    correct: "A",
    explanation: "A too-large learning rate can cause oscillation or divergence instead of convergence."
  },
  {
    id: "NN1-035",
    topic: "Regularization",
    question: "What is the purpose of regularization in neural-network training?",
    options: {
      A: "To reduce overfitting by constraining the model, for example by penalizing large weights or using dropout",
      B: "To force the model to achieve zero training loss at all costs",
      C: "To convert every problem into reinforcement learning",
      D: "To make the validation set identical to the training set"
    },
    correct: "A",
    explanation: "Regularization aims to improve generalization, often by discouraging overly complex solutions."
  },
  {
    id: "NN1-036",
    topic: "Dropout",
    question: "What is the basic idea of dropout regularization during training?",
    options: {
      A: "Randomly deactivate some units so the network cannot rely too strongly on specific activations.",
      B: "Remove all training examples with missing values.",
      C: "Set the learning rate permanently to zero.",
      D: "Replace every convolution with average pooling."
    },
    correct: "A",
    explanation: "Dropout randomly masks units during training and can reduce co-adaptation."
  },
  {
    id: "NN1-037",
    topic: "Convolution output size",
    question: "For a square input of size n x n, filter size f x f, padding p, and stride 1, what is the spatial output size of a convolution?",
    options: {
      A: "\\((n + 2p - f + 1) \\times (n + 2p - f + 1)\\)",
      B: "\\((n - 2p + f) \\times (n - 2p + f)\\)",
      C: "\\((n f p) \\times (n f p)\\)",
      D: "\\((p + f - 1) \\times (p + f - 1)\\)"
    },
    correct: "A",
    explanation: "With stride 1, padding p increases the effective input size to n + 2p before applying a filter of size f."
  },
  {
    id: "NN1-038",
    topic: "Edge-detection kernels",
    question: "Which 3x3 kernel is a typical vertical edge detector of the kind discussed in class?",
    options: {
      A: "[[1, 0, -1], [1, 0, -1], [1, 0, -1]]",
      B: "[[1, 1, 1], [0, 0, 0], [-1, -1, -1]]",
      C: "[[0, 0, 0], [0, 1, 0], [0, 0, 0]]",
      D: "[[1, 1, 1], [1, 1, 1], [1, 1, 1]]"
    },
    correct: "A",
    explanation: "This kernel responds to vertical edges (bright on left, dark on right)."
  },
  {
    id: "NN1-039",
    topic: "Padding",
    question: "Why is padding commonly used in convolutional networks?",
    options: {
      A: "To control spatial shrinking and allow edge pixels to contribute more fully to convolutions",
      B: "To remove all bias terms from the network",
      C: "To make the image labels continuous",
      D: "To turn a recurrent network into a dense network"
    },
    correct: "A",
    explanation: "Padding can preserve spatial size and reduce the relative neglect of edge pixels."
  },
  {
    id: "NN1-040",
    topic: "Valid and same convolution",
    question: "For stride 1 and odd filter size f, what padding p gives same convolution for an n x n input?",
    options: {
      A: "\\(p = 0\\)",
      B: "\\(p = (f - 1) / 2\\)",
      C: "\\(p = n + f\\)",
      D: "\\(p = f^{-2}\\)"
    },
    correct: "B",
    explanation: "Same convolution chooses padding so the output spatial size equals the input size."
  },
  {
    id: "NN1-041",
    topic: "Pooling layers",
    question: "Which statement about pooling layers is correct?",
    options: {
      A: "Max pooling selects the largest value in each pooling window.",
      B: "Pooling layers usually learn one weight for every pixel in the input image.",
      C: "Average pooling always increases the spatial resolution.",
      D: "Pooling is identical to one-hot encoding."
    },
    correct: "A",
    explanation: "Max pooling keeps the maximum activation within each local block."
  },
  {
    id: "NN1-042",
    topic: "CNN motivation",
    question: "Why are CNNs usually better suited than fully connected networks for image tasks?",
    options: {
      A: "They learn local filters that reuse weights across spatial positions, reducing parameters and exploiting image structure.",
      B: "They require no training data.",
      C: "They can only process one-dimensional sequences.",
      D: "They avoid all non-linear activations."
    },
    correct: "A",
    explanation: "Convolutions use local connectivity and weight sharing, which fits image data well."
  },
  {
    id: "NN1-043",
    topic: "Dense network parameter count",
    question: "A dense network has 3 inputs, one hidden layer with 2 neurons, and one output neuron. Including biases, how many trainable parameters does it have?",
    options: {
      A: "6",
      B: "8",
      C: "11",
      D: "12"
    },
    correct: "C",
    explanation: "Input-to-hidden: 2x3 weights plus 2 biases. Hidden-to-output: 1x2 weights plus 1 bias. Total 11."
  },
  {
    id: "NN1-044",
    topic: "RNN neuron",
    question: "How does a recurrent neuron differ from a neuron in a standard multilayer perceptron?",
    options: {
      A: "It also receives information from the previous time step.",
      B: "It has no weights.",
      C: "It can only be used for images.",
      D: "It does not use activation functions."
    },
    correct: "A",
    explanation: "A recurrent neuron uses current input and a previous hidden/output state."
  },
  {
    id: "NN1-045",
    topic: "Unrolling RNNs",
    question: "What does it mean to unroll a recurrent network in time?",
    options: {
      A: "Represent the repeated recurrent computation as a sequence of linked copies across time steps.",
      B: "Remove all time steps from the data.",
      C: "Replace recurrence with one-hot encoding.",
      D: "Train a CNN with larger filters."
    },
    correct: "A",
    explanation: "Unrolling makes the temporal computation explicit as a deep graph over time."
  },
  {
    id: "NN1-046",
    topic: "RNN training",
    question: "Which method is used to train recurrent neural networks through time?",
    options: {
      A: "Backpropagation through time",
      B: "K-means through time",
      C: "Padding through time",
      D: "ROC through time"
    },
    correct: "A",
    explanation: "RNNs are trained by applying backpropagation to the unrolled temporal computation."
  },
  {
    id: "NN1-047",
    topic: "LSTM inputs and state",
    question: "Compared with a simple recurrent neuron, what additional state is central to an LSTM?",
    options: {
      A: "A long-term cell state in addition to the hidden state",
      B: "A convolution filter with fixed values",
      C: "A confusion matrix stored at each time step",
      D: "A one-hot encoded class label used as a weight matrix"
    },
    correct: "A",
    explanation: "An LSTM maintains a cell state, often interpreted as long-term memory, along with the hidden state."
  },
  {
    id: "NN1-048",
    topic: "LSTM gates",
    question: "Which set lists the standard gates of an LSTM cell?",
    options: {
      A: "Forget gate, update/input gate, output gate",
      B: "Pooling gate, padding gate, stride gate",
      C: "Precision gate, recall gate, F1 gate",
      D: "Train gate, validation gate, test gate"
    },
    correct: "A",
    explanation: "LSTMs regulate memory using gates such as forget, input/update, and output gates."
  },
  {
    id: "NN1-049",
    topic: "Vanishing gradients",
    question: "Which problem motivated the development and use of LSTMs for sequence modeling?",
    options: {
      A: "Vanishing gradients in long unrolled recurrent networks",
      B: "The impossibility of using labels in supervised learning",
      C: "The lack of any activation function in CNNs",
      D: "The fact that precision and recall are always equal"
    },
    correct: "A",
    explanation: "Long recurrent chains can make gradients very small, making earlier time steps hard to learn from."
  },
  {
    id: "NN1-050",
    topic: "RNN sequence tasks",
    question: "For named entity recognition with an RNN, which architecture is most appropriate?",
    options: {
      A: "Sequence-to-sequence with one output decision per input token",
      B: "Sequence-to-vector with only one output for the whole sentence",
      C: "Image-to-image convolution without time steps",
      D: "Reinforcement learning with no input tokens"
    },
    correct: "A",
    explanation: "Named entity recognition usually assigns a label to each token, so it is naturally sequence-to-sequence."
  }
];